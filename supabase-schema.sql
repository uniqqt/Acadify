-- ============================================================
-- Acadify — Supabase Schema
-- Run this entire file in the Supabase SQL Editor
-- ============================================================

-- Profiles (extends auth.users with name, course, streak)
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  course text not null,
  avatar text,
  streak_current int default 1,
  streak_longest int default 1,
  streak_last_date text,
  created_at timestamptz default now()
);
alter table profiles enable row level security;
create policy "Users manage own profile" on profiles
  for all using (auth.uid() = id);

-- Auto-create profile row when a user signs up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, name, course, avatar)
  values (
    new.id,
    new.raw_user_meta_data->>'name',  
    new.raw_user_meta_data->>'course',
    new.raw_user_meta_data->>'avatar'
  );
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Tasks
create table if not exists tasks (
  id text primary key,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  description text,
  category text,
  deadline timestamptz not null,
  completed boolean default false,
  created_at timestamptz default now()
);
alter table tasks enable row level security;
create policy "Users manage own tasks" on tasks
  for all using (auth.uid() = user_id);

-- Study progress
create table if not exists study_progress (
  user_id uuid references auth.users on delete cascade not null,
  topic_id text not null,
  viewed boolean default false,
  sections text[] default '{}',
  updated_at timestamptz default now(),
  primary key (user_id, topic_id)
);
alter table study_progress enable row level security;
create policy "Users manage own progress" on study_progress
  for all using (auth.uid() = user_id);

-- Quiz results
create table if not exists quiz_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  topic_id text not null,
  score int not null,
  total int not null,
  answers jsonb,
  created_at timestamptz default now()
);
alter table quiz_results enable row level security;
create policy "Users manage own quiz results" on quiz_results
  for all using (auth.uid() = user_id);

-- Notes
create table if not exists notes (
  id text primary key,
  user_id uuid references auth.users on delete cascade not null,
  title text not null default 'Untitled',
  content text default '',
  topic_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table notes enable row level security;
create policy "Users manage own notes" on notes
  for all using (auth.uid() = user_id);

-- Highlights
create table if not exists highlights (
  id text primary key,
  user_id uuid references auth.users on delete cascade not null,
  section_id text not null,
  text text not null,
  color text not null,
  created_at timestamptz default now()
);
alter table highlights enable row level security;
create policy "Users manage own highlights" on highlights
  for all using (auth.uid() = user_id);

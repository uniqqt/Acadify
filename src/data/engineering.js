const ENGINEERING_TOPICS = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. ENGINEERING MATHEMATICS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'eng-mathematics',
    title: 'Engineering Mathematics',
    shortTitle: 'Eng Math',
    category: 'Engineering Sciences',
    icon: 'Calculator',
    year: 'Board Exam Core',
    description:
      'Covers the mathematical foundations required for Philippine Engineering board examinations, including algebra, calculus, statistics, and differential equations. These topics appear consistently across all engineering disciplines.',
    color: { light: '#7f1d1d', dark: '#fca5a5', badge: '#dc2626' },
    chapters: [
      {
        id: 'engmath-algebra',
        title: 'Algebra & Advanced Math',
        sections: [
          {
            id: 'engmath-alg-quadratic',
            number: 'Topic 1.1',
            title: 'Quadratic & Polynomial Equations',
            content:
              'A quadratic equation has the standard form ax² + bx + c = 0, where a ≠ 0. The solutions are found using the quadratic formula: x = (−b ± √(b² − 4ac)) / 2a. The discriminant D = b² − 4ac determines the nature of roots: D > 0 gives two distinct real roots, D = 0 gives one repeated real root, and D < 0 gives two complex conjugate roots. For polynomial equations of degree n, Descartes\' Rule of Signs counts positive real roots by sign changes in f(x) and negative roots by sign changes in f(−x). The Remainder Theorem states that when f(x) is divided by (x − r), the remainder equals f(r). The Factor Theorem states that (x − r) is a factor of f(x) if and only if f(r) = 0.',
            summary:
              '• Quadratic formula: x = (−b ± √(b²−4ac)) / 2a\n• Discriminant: D > 0 (2 real), D = 0 (1 repeated), D < 0 (2 complex)\n• Sum of roots: −b/a; Product of roots: c/a\n• Remainder Theorem: f(r) = remainder when f(x) ÷ (x−r)\n• Factor Theorem: (x−r) is a factor iff f(r) = 0\n• Synthetic division used for polynomial long division',
          },
          {
            id: 'engmath-alg-log',
            number: 'Topic 1.2',
            title: 'Logarithms & Exponentials',
            content:
              'Logarithms and exponentials are inverse functions. The natural logarithm is ln x = logₑ x where e ≈ 2.71828. Key properties: log(ab) = log a + log b, log(a/b) = log a − log b, log(aⁿ) = n log a, and the change-of-base formula: logₐ b = ln b / ln a. Exponential growth is modeled as N(t) = N₀eᵏᵗ where k > 0, and exponential decay as N(t) = N₀e⁻ᵏᵗ where k > 0. In engineering problems, logarithms appear in decibel calculations (dB = 10 log₁₀(P₂/P₁)), half-life decay (t₁/₂ = ln 2 / k), and pH calculations (pH = −log[H⁺]). The number e arises naturally from continuous compounding: A = Pe^(rt).',
            summary:
              '• log(ab) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n log a\n• Change of base: logₐ b = log b / log a = ln b / ln a\n• ln e = 1; log₁₀ 10 = 1; log 1 = 0\n• Exponential growth: N = N₀eᵏᵗ; Decay: N = N₀e⁻ᵏᵗ\n• Half-life: t₁/₂ = ln 2 / k ≈ 0.693/k\n• Continuous compounding: A = Pe^(rt)',
          },
          {
            id: 'engmath-alg-complex',
            number: 'Topic 1.3',
            title: 'Complex Numbers',
            content:
              'A complex number is expressed as z = a + bi where a is the real part, b is the imaginary part, and i = √(−1). The modulus (magnitude) is |z| = √(a² + b²) and the argument (angle) is θ = arctan(b/a). The polar form is z = r(cos θ + i sin θ) = re^(iθ) by Euler\'s formula. Multiplication in polar form: z₁z₂ = r₁r₂ e^i(θ₁+θ₂). De Moivre\'s Theorem states zⁿ = rⁿ(cos nθ + i sin nθ). Complex conjugate z̄ = a − bi satisfies z · z̄ = a² + b² = |z|². In AC circuit analysis, impedance Z = R + jX uses the imaginary unit j instead of i to avoid confusion with current.',
            summary:
              '• i = √(−1); i² = −1; i³ = −i; i⁴ = 1\n• Modulus: |z| = √(a²+b²); Argument: θ = arctan(b/a)\n• Polar form: z = re^(iθ) = r∠θ\n• Euler\'s formula: e^(iθ) = cos θ + i sin θ\n• De Moivre\'s Theorem: zⁿ = rⁿ∠(nθ)\n• Conjugate: z̄ = a − bi; z·z̄ = |z|²',
          },
        ],
      },
      {
        id: 'engmath-calculus',
        title: 'Calculus',
        sections: [
          {
            id: 'engmath-calc-diff',
            number: 'Topic 2.1',
            title: 'Differentiation Rules & Optimization',
            content:
              'Differentiation finds the instantaneous rate of change of a function. Key rules: Power rule d/dx(xⁿ) = nxⁿ⁻¹, Product rule d/dx(uv) = u\'v + uv\', Quotient rule d/dx(u/v) = (u\'v − uv\')/v², and Chain rule d/dx[f(g(x))] = f\'(g(x)) · g\'(x). Derivatives of trigonometric functions: d/dx(sin x) = cos x, d/dx(cos x) = −sin x, d/dx(tan x) = sec²x. For optimization, critical points occur where f\'(x) = 0 or f\'(x) is undefined. The Second Derivative Test determines if a critical point is a maximum (f\'\'< 0), minimum (f\'\' > 0), or inflection point (f\'\' = 0). L\'Hôpital\'s Rule resolves 0/0 or ∞/∞ indeterminate forms by differentiating numerator and denominator separately.',
            summary:
              '• Power rule: d/dx(xⁿ) = nxⁿ⁻¹\n• Chain rule: d/dx[f(g(x))] = f\'(g(x))·g\'(x)\n• d/dx(eˣ) = eˣ; d/dx(ln x) = 1/x\n• Critical points: f\'(x) = 0; max if f\'\'< 0, min if f\'\'> 0\n• L\'Hôpital\'s Rule: lim f/g = lim f\'/g\' when 0/0 or ∞/∞\n• Implicit differentiation for equations not solved for y',
          },
          {
            id: 'engmath-calc-integral',
            number: 'Topic 2.2',
            title: 'Integral Calculus & Applications',
            content:
              'Integration is the reverse of differentiation. The indefinite integral ∫f(x)dx = F(x) + C where F\'(x) = f(x). The Fundamental Theorem of Calculus states ∫ₐᵇ f(x)dx = F(b) − F(a). Key integration techniques include substitution (u-substitution), integration by parts (∫udv = uv − ∫vdu), and partial fractions for rational functions. Applications in engineering: area between curves A = ∫ₐᵇ [f(x) − g(x)] dx, volume of revolution using the disk method V = π∫ₐᵇ [f(x)]² dx, and arc length L = ∫ₐᵇ √(1 + [f\'(x)]²) dx. Centroid calculations use ȳ = (1/A)∫ₐᵇ ½[f(x)]² dx. Moment of inertia I = ∫r² dm is critical in structural mechanics.',
            summary:
              '• ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1)\n• ∫eˣ dx = eˣ + C; ∫(1/x) dx = ln|x| + C\n• Fundamental Theorem: ∫ₐᵇ f(x)dx = F(b) − F(a)\n• Integration by parts: ∫u dv = uv − ∫v du\n• Area: A = ∫ₐᵇ [top − bottom] dx\n• Volume (disk): V = π∫ₐᵇ [f(x)]² dx',
          },
        ],
      },
      {
        id: 'engmath-stats',
        title: 'Statistics & Differential Equations',
        sections: [
          {
            id: 'engmath-stats-prob',
            number: 'Topic 3.1',
            title: 'Probability & Normal Distribution',
            content:
              'Probability is the measure of likelihood that an event will occur: P(A) = favorable outcomes / total outcomes, where 0 ≤ P(A) ≤ 1. The addition rule is P(A∪B) = P(A) + P(B) − P(A∩B), and for mutually exclusive events P(A∪B) = P(A) + P(B). The multiplication rule for independent events is P(A∩B) = P(A)·P(B). The mean (μ) and standard deviation (σ) describe a distribution\'s center and spread. The normal distribution is symmetric and bell-shaped; the standard normal z-score is z = (x − μ)/σ. For a normal distribution: 68% of data falls within μ ± σ, 95% within μ ± 2σ, and 99.7% within μ ± 3σ (empirical rule). The binomial distribution P(X=k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ models n independent trials with probability p of success.',
            summary:
              '• P(A∪B) = P(A) + P(B) − P(A∩B)\n• For independent events: P(A∩B) = P(A)·P(B)\n• z-score: z = (x − μ)/σ\n• Empirical rule: 68% (±1σ), 95% (±2σ), 99.7% (±3σ)\n• Binomial: P(X=k) = C(n,k) pᵏ(1−p)ⁿ⁻ᵏ; mean = np; σ² = np(1−p)\n• Poisson: P(X=k) = (e⁻λ λᵏ)/k! for rare events',
          },
          {
            id: 'engmath-stats-ode',
            number: 'Topic 3.2',
            title: 'First & Second Order ODEs',
            content:
              'A differential equation relates a function to its derivatives. A first-order ODE has the form dy/dx = f(x, y). Separable equations are solved by separating variables: ∫g(y)dy = ∫f(x)dx. Linear first-order ODEs dy/dx + P(x)y = Q(x) are solved using the integrating factor μ(x) = e^∫P(x)dx, yielding y = (1/μ)∫μQ dx + C. Second-order linear ODEs with constant coefficients ay\'\' + by\' + cy = 0 use the characteristic equation ar² + br + c = 0. If roots are real and distinct (r₁ ≠ r₂): y = C₁e^(r₁x) + C₂e^(r₂x). If roots are repeated (r₁ = r₂ = r): y = (C₁ + C₂x)e^(rx). If roots are complex (r = α ± βi): y = e^(αx)(C₁cos βx + C₂sin βx). Non-homogeneous ODEs use undetermined coefficients or variation of parameters.',
            summary:
              '• Separable ODE: g(y)dy = f(x)dx → integrate both sides\n• Integrating factor: μ = e^∫P(x)dx for linear first-order\n• Characteristic equation: ar² + br + c = 0\n• Real distinct roots: y = C₁e^(r₁x) + C₂e^(r₂x)\n• Repeated roots: y = (C₁ + C₂x)e^(rx)\n• Complex roots α ± βi: y = e^(αx)(C₁cos βx + C₂sin βx)',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. ENGINEERING SCIENCES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'eng-sciences',
    title: 'Engineering Sciences',
    shortTitle: 'Eng Sciences',
    category: 'Engineering Sciences',
    icon: 'Atom',
    year: 'Board Exam Core',
    description:
      'Covers the fundamental principles of physics and mechanics applied to engineering problems. Includes kinematics, Newton\'s laws, work-energy theorem, electricity, circuits, statics, and dynamics — all essential for Philippine Engineering board exams.',
    color: { light: '#1e3a5f', dark: '#93c5fd', badge: '#3b82f6' },
    chapters: [
      {
        id: 'engsci-physics',
        title: 'Physics for Engineers',
        sections: [
          {
            id: 'engsci-kinematics',
            number: 'Topic 1.1',
            title: 'Kinematics & Newton\'s Laws / Work-Energy',
            content:
              'Kinematics describes motion without considering forces. The basic kinematic equations for constant acceleration are: v = v₀ + at, s = v₀t + ½at², v² = v₀² + 2as, and s = ½(v + v₀)t, where v₀ is initial velocity, v is final velocity, a is acceleration, t is time, and s is displacement. Free fall uses a = g = 9.81 m/s². Newton\'s Three Laws: (1) Law of Inertia — an object remains at rest or in uniform motion unless acted upon by a net external force; (2) F = ma — net force equals mass times acceleration; (3) For every action there is an equal and opposite reaction. The Work-Energy Theorem states W_net = ΔKE = ½mv² − ½mv₀². The principle of conservation of energy states that total mechanical energy (KE + PE) is constant in the absence of non-conservative forces. Power P = W/t = Fv.',
            summary:
              '• v = v₀ + at; s = v₀t + ½at²; v² = v₀² + 2as\n• Newton\'s 2nd Law: ΣF = ma\n• Work: W = Fd cos θ; Work-Energy: W_net = ΔKE\n• KE = ½mv²; PE = mgh\n• Conservation of Energy: KE₁ + PE₁ = KE₂ + PE₂ (no friction)\n• Power: P = W/t = Fv; 1 hp = 746 W',
          },
          {
            id: 'engsci-electricity',
            number: 'Topic 1.2',
            title: 'Electricity, Ohm\'s Law & Circuits',
            content:
              'Electric current I is the rate of charge flow: I = Q/t (amperes). Ohm\'s Law states V = IR, where V is voltage (volts), I is current (amperes), and R is resistance (ohms). Electric power P = VI = I²R = V²/R. In series circuits, the total resistance R_total = R₁ + R₂ + ... + Rₙ and the current is the same through all components. In parallel circuits, 1/R_total = 1/R₁ + 1/R₂ + ... + 1/Rₙ and the voltage is the same across all branches. Kirchhoff\'s Current Law (KCL) states that the sum of currents entering a node equals the sum leaving it (ΣI_in = ΣI_out). Kirchhoff\'s Voltage Law (KVL) states that the sum of voltages around any closed loop equals zero (ΣV = 0). Capacitance C = Q/V (farads), and capacitors store energy E = ½CV². Inductance L (henries) satisfies V = L(dI/dt) and stores energy E = ½LI².',
            summary:
              '• Ohm\'s Law: V = IR; Power: P = VI = I²R = V²/R\n• Series: R_T = R₁+R₂+...; same current\n• Parallel: 1/R_T = 1/R₁+1/R₂+...; same voltage\n• KCL: ΣI_in = ΣI_out at any node\n• KVL: ΣV = 0 around any closed loop\n• Energy in capacitor: E = ½CV²; in inductor: E = ½LI²',
          },
        ],
      },
      {
        id: 'engsci-mechanics',
        title: 'Engineering Mechanics',
        sections: [
          {
            id: 'engsci-statics',
            number: 'Topic 2.1',
            title: 'Statics: Free Body Diagram & Equilibrium',
            content:
              'Statics analyzes bodies at rest or in uniform motion under the action of forces. A Free Body Diagram (FBD) isolates a body and shows all external forces and moments acting on it. For a body in static equilibrium, three conditions must be satisfied: ΣFx = 0, ΣFy = 0, and ΣM = 0 (sum of moments about any point is zero). A moment (torque) M = F × d, where d is the perpendicular distance from the line of action to the pivot. For concurrent force systems (all forces meeting at a point), only ΣFx = 0 and ΣFy = 0 are needed. Friction force f = μN, where μ is the coefficient of friction and N is the normal force. For trusses, the method of joints applies equilibrium to each joint, while the method of sections cuts through members to find member forces directly.',
            summary:
              '• Equilibrium conditions: ΣFx = 0, ΣFy = 0, ΣM = 0\n• Moment: M = F × d (perpendicular distance)\n• Friction: f = μN (static: μₛ > μₖ kinetic)\n• FBD: isolate body, show all external forces\n• Method of joints: apply ΣFx=0, ΣFy=0 at each truss joint\n• Varignon\'s Theorem: moment of resultant = sum of moments of components',
          },
          {
            id: 'engsci-dynamics',
            number: 'Topic 2.2',
            title: 'Dynamics: Kinematics & Newton\'s 2nd Law',
            content:
              'Dynamics studies the relationship between forces and the motion they produce. For rectilinear (straight-line) motion, Newton\'s Second Law gives ΣF = ma along the direction of motion. For curvilinear (curved) motion, the normal (centripetal) and tangential components are analyzed separately: Fₙ = maₙ = mv²/r (centripetal force directed toward center) and Fₜ = maₜ = m(dv/dt) (tangential force). The impulse-momentum theorem states that Ft = Δ(mv), and the principle of conservation of linear momentum holds when no external forces act: m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'. For rotational dynamics, τ = Iα where τ is torque, I is moment of inertia, and α is angular acceleration. Angular kinematics parallels linear kinematics: ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ.',
            summary:
              '• ΣF = ma (linear); τ = Iα (rotational)\n• Centripetal force: Fₙ = mv²/r (toward center)\n• Impulse-Momentum: Ft = Δ(mv) = m(v₂−v₁)\n• Conservation of momentum: m₁v₁+m₂v₂ = m₁v₁\'+m₂v₂\'\n• Angular kinematics: ω = ω₀+αt; θ = ω₀t+½αt²\n• Kinetic energy rotation: KE = ½Iω²',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. STRENGTH OF MATERIALS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'eng-strength',
    title: 'Strength of Materials',
    shortTitle: 'Strength of Materials',
    category: 'Engineering Sciences',
    icon: 'Layers',
    year: 'Board Exam Core',
    description:
      'Studies the behavior of solid bodies subjected to various types of loading. Covers stress, strain, material properties, and the analysis of beams and shafts under bending and torsional loads — a core subject in Philippine Engineering board exams.',
    color: { light: '#78350f', dark: '#fde68a', badge: '#f59e0b' },
    chapters: [
      {
        id: 'engstr-stress',
        title: 'Stress & Strain',
        sections: [
          {
            id: 'engstr-normalshear',
            number: 'Topic 1.1',
            title: 'Normal Stress, Shear Stress & Hooke\'s Law',
            content:
              'Normal stress σ is the force per unit area acting perpendicular to the cross-section: σ = P/A (Pa or MPa), where P is the axial force and A is the cross-sectional area. Tensile stress is positive; compressive stress is negative. Shear stress τ acts parallel to the cross-section: τ = V/A for direct shear or τ = VQ/(Ib) for beams. Normal strain ε = δ/L (dimensionless), where δ is the deformation and L is the original length. Shear strain γ = τ/G. Hooke\'s Law states that within the elastic limit, stress is proportional to strain: σ = Eε, where E is Young\'s modulus (modulus of elasticity). The modulus of elasticity for steel is approximately 200 GPa and for aluminum approximately 70 GPa. Poisson\'s ratio ν = −(lateral strain)/(axial strain) = −εₗₐₜ/ε, typically 0.25–0.33 for most metals.',
            summary:
              '• Normal stress: σ = P/A (tension +, compression −)\n• Shear stress: τ = V/A (direct); τ = VQ/(Ib) (beams)\n• Normal strain: ε = δ/L; Shear strain: γ = τ/G\n• Hooke\'s Law: σ = Eε; τ = Gγ\n• Poisson\'s ratio: ν = −εₗₐₜ/ε (0.25–0.33 for metals)\n• E_steel ≈ 200 GPa; E_aluminum ≈ 70 GPa',
          },
          {
            id: 'engstr-diagram',
            number: 'Topic 1.2',
            title: 'Stress-Strain Diagram & Material Properties',
            content:
              'The stress-strain diagram for a ductile material (e.g., mild steel) shows distinct regions. The proportional limit is the highest stress at which Hooke\'s Law is valid. The elastic limit is the highest stress from which the material returns to its original shape upon unloading. The yield point (or yield strength) is where plastic deformation begins; for materials without a clear yield point, the 0.2% offset method is used. The ultimate strength is the maximum stress the material can withstand. The fracture or rupture point is where the specimen breaks. Modulus of resilience (area under elastic region) = σy²/(2E) measures energy absorbed before yielding. Modulus of toughness is the total area under the curve, representing energy absorbed before fracture. Factor of safety FS = ultimate stress / allowable stress, typically 2–4 for structural applications.',
            summary:
              '• Stress-strain regions: proportional → elastic → yielding → strain hardening → necking → fracture\n• Proportional limit: highest stress where σ = Eε\n• Yield strength (0.2% offset method for no clear yield point)\n• Modulus of resilience: u_r = σy²/(2E)\n• Factor of Safety: FS = σ_ultimate / σ_allowable\n• Ductile materials: large plastic deformation before fracture (steel, aluminum)\n• Brittle materials: fracture near elastic limit (cast iron, concrete)',
          },
        ],
      },
      {
        id: 'engstr-beams',
        title: 'Beams & Torsion',
        sections: [
          {
            id: 'engstr-bending',
            number: 'Topic 2.1',
            title: 'Bending Stress & Flexure Formula',
            content:
              'When a beam is subjected to bending moments, normal stresses develop across the cross-section. The flexure formula gives the bending stress: σ = Mc/I, where M is the bending moment at the section, c is the distance from the neutral axis to the outermost fiber, and I is the moment of inertia of the cross-section about the neutral axis. The section modulus S = I/c simplifies the formula to σ = M/S. The neutral axis passes through the centroid of the cross-section, where bending stress is zero. Maximum bending stress occurs at the outermost fibers (top and bottom). For a rectangular cross-section: I = bh³/12 and c = h/2, so S = bh²/6. For a circular cross-section: I = πd⁴/64 and c = d/2, so S = πd³/32. Shear stress distribution in beams follows τ = VQ/(Ib), where V is the shear force, Q is the first moment of area above the point, I is the moment of inertia, and b is the width at the point.',
            summary:
              '• Flexure formula: σ = Mc/I (bending normal stress)\n• Section modulus: S = I/c; σ_max = M/S\n• Neutral axis: zero bending stress, passes through centroid\n• Rectangle: I = bh³/12; S = bh²/6\n• Circle: I = πd⁴/64; S = πd³/32\n• Shear stress in beams: τ = VQ/(Ib); max at neutral axis',
          },
          {
            id: 'engstr-torsion',
            number: 'Topic 2.2',
            title: 'Torsion Formula',
            content:
              'Torsion occurs when a shaft is subjected to twisting moments (torques). The torsion formula gives the shear stress in a circular shaft: τ = Tc/J, where T is the applied torque, c is the outer radius of the shaft, and J is the polar moment of inertia. For a solid circular shaft: J = πd⁴/32. For a hollow circular shaft: J = π(d_o⁴ − d_i⁴)/32. The polar section modulus Z_p = J/c simplifies to τ = T/Z_p. The angle of twist φ = TL/(JG) (in radians), where L is the shaft length and G is the shear modulus. The relationship between E, G, and ν is G = E / [2(1 + ν)]. Power transmitted by a rotating shaft is P = Tω = 2πNT/60 (in watts), where N is speed in rpm and T is torque in N·m. Maximum shear stress theory and Von Mises theory are used for combined loading.',
            summary:
              '• Torsion formula: τ = Tc/J = T/Z_p\n• Solid shaft: J = πd⁴/32; Z_p = πd³/16\n• Hollow shaft: J = π(d_o⁴ − d_i⁴)/32\n• Angle of twist: φ = TL/(JG) (radians)\n• Relationship: G = E/[2(1+ν)]\n• Power: P = Tω = 2πNT/60 (N in rpm, T in N·m)',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. FLUID MECHANICS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'eng-fluids',
    title: 'Fluid Mechanics',
    shortTitle: 'Fluid Mechanics',
    category: 'Engineering Sciences',
    icon: 'Droplets',
    year: 'Board Exam Core',
    description:
      'Studies the behavior of fluids (liquids and gases) at rest and in motion. Includes fluid statics, hydrostatic pressure, buoyancy, fluid dynamics, Bernoulli\'s equation, pipe flow, and pump power — all heavily tested in Philippine Engineering board examinations.',
    color: { light: '#134e4a', dark: '#5eead4', badge: '#14b8a6' },
    chapters: [
      {
        id: 'engfl-statics',
        title: 'Fluid Statics',
        sections: [
          {
            id: 'engfl-pressure',
            number: 'Topic 1.1',
            title: 'Pressure Variation in Fluids & Manometers',
            content:
              'Pressure in a static fluid increases with depth: P = P₀ + ρgh, where P₀ is the pressure at the surface, ρ is fluid density, g = 9.81 m/s², and h is the depth. This is the hydrostatic equation. For a fluid of specific weight γ (= ρg): P = γh. Gauge pressure is pressure relative to atmospheric pressure: P_gauge = P_abs − P_atm. A manometer uses fluid columns to measure pressure differences. For a simple U-tube manometer: P_A + γ₁h₁ = P_B + γ₂h₂. The hydrostatic force on a submerged flat surface is F = γ ȳ A, where ȳ is the depth to the centroid of the surface and A is the area. The location of this resultant force (center of pressure) is below the centroid: y_cp = ȳ + I_c/(ȳA), where I_c is the centroidal moment of inertia.',
            summary:
              '• Hydrostatic pressure: P = P₀ + ρgh = P₀ + γh\n• Gauge pressure: P_gauge = P_abs − P_atm\n• Specific weight: γ = ρg (water: γ = 9810 N/m³ = 62.4 lb/ft³)\n• Hydrostatic force on flat surface: F = γȳA\n• Center of pressure: y_cp = ȳ + I_c/(ȳA)\n• Manometer: trace fluid pressures step by step',
          },
          {
            id: 'engfl-buoyancy',
            number: 'Topic 1.2',
            title: 'Buoyancy & Archimedes\' Principle',
            content:
              'Archimedes\' Principle states that a body submerged in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced: F_B = γ_fluid × V_displaced. For a floating body, the buoyant force equals the weight of the body: F_B = W, so γ_fluid × V_submerged = γ_body × V_total. The specific gravity (SG) of a substance is the ratio of its density to that of water: SG = ρ/ρ_water. For a floating object, the fraction submerged equals SG_object/SG_fluid. Stability of floating bodies depends on the relative positions of the center of gravity G and the metacenter M. A floating body is stable if M is above G (GM > 0), where the metacentric height GM = I_waterplane/V_submerged − GB. Stability of submerged bodies requires that G be below the center of buoyancy B.',
            summary:
              '• Archimedes\' Principle: F_B = γ_fluid × V_displaced\n• Floating: F_B = W → γ_f × V_sub = γ_b × V_total\n• Fraction submerged = SG_object / SG_fluid\n• SG = ρ/ρ_water (water: ρ = 1000 kg/m³)\n• Metacentric height: GM = I_WP/V_sub − GB (stable if GM > 0)\n• Hydrometer measures SG of liquids directly',
          },
        ],
      },
      {
        id: 'engfl-dynamics',
        title: 'Fluid Dynamics',
        sections: [
          {
            id: 'engfl-bernoulli',
            number: 'Topic 2.1',
            title: 'Bernoulli Equation & Continuity Equation',
            content:
              'The continuity equation for incompressible flow states that the volumetric flow rate Q is constant: Q = A₁V₁ = A₂V₂, where A is the cross-sectional area and V is the fluid velocity. The Bernoulli equation applies along a streamline for steady, incompressible, inviscid flow: P₁/γ + V₁²/(2g) + z₁ = P₂/γ + V₂²/(2g) + z₂ = H (total head, constant). The terms represent pressure head (P/γ), velocity head (V²/2g), and elevation head (z). Torricelli\'s theorem is a special case: for a tank with a small orifice, V = √(2gh). The Venturi meter uses the Bernoulli equation to measure flow rate: Q = A₂√(2g·Δh / (1−(A₂/A₁)²)). Pitot tubes measure velocity using the stagnation pressure: V = √(2(P_stag − P_static)/ρ). For real fluids, the energy equation includes a head loss term: H₁ + h_pump = H₂ + h_turbine + h_loss.',
            summary:
              '• Continuity: Q = A₁V₁ = A₂V₂ (incompressible flow)\n• Bernoulli: P/γ + V²/2g + z = constant (along streamline)\n• Total head H = pressure head + velocity head + elevation head\n• Torricelli: V = √(2gh) for tank orifice\n• Pitot tube: V = √(2ΔP/ρ)\n• Energy equation: H₁ + h_pump = H₂ + h_loss',
          },
          {
            id: 'engfl-pipe',
            number: 'Topic 2.2',
            title: 'Pipe Flow, Darcy-Weisbach & Pump Power',
            content:
              'For flow in pipes, the Reynolds number Re = ρVD/μ = VD/ν distinguishes laminar (Re < 2000) from turbulent (Re > 4000) flow, with a transition zone between. Head loss due to friction in pipes is given by the Darcy-Weisbach equation: h_f = f(L/D)(V²/2g), where f is the Darcy friction factor, L is pipe length, D is pipe diameter, and V is average velocity. For laminar flow, f = 64/Re. For turbulent flow, f is found from the Moody diagram or the Colebrook equation. Minor losses (fittings, bends, valves) are expressed as h_m = K(V²/2g), where K is the loss coefficient. The pump power equation is P_pump = γQh_p, where h_p is the pump head and Q is flow rate. Pump efficiency η = P_water / P_input = γQh_p / P_input. Pipes in series have the same flow rate but head losses add; pipes in parallel have the same head loss but flow rates add.',
            summary:
              '• Reynolds number: Re = ρVD/μ; laminar: Re<2000; turbulent: Re>4000\n• Darcy-Weisbach: h_f = f(L/D)(V²/2g)\n• Laminar friction factor: f = 64/Re\n• Minor losses: h_m = K·V²/2g\n• Pump power: P = γQh_p (water power)\n• Pump efficiency: η = γQh_p / P_input',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. THERMODYNAMICS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'eng-thermo',
    title: 'Thermodynamics',
    shortTitle: 'Thermodynamics',
    category: 'Engineering Sciences',
    icon: 'Thermometer',
    year: 'Board Exam Core',
    description:
      'Studies energy, heat, work, and their transformations in engineering systems. Covers the laws of thermodynamics, thermodynamic properties, and ideal power and refrigeration cycles — a fundamental subject tested in Philippine Mechanical and other Engineering board exams.',
    color: { light: '#7c2d12', dark: '#fed7aa', badge: '#f97316' },
    chapters: [
      {
        id: 'engthermo-laws',
        title: 'Laws of Thermodynamics',
        sections: [
          {
            id: 'engthermo-laws-all',
            number: 'Topic 1.1',
            title: 'Zeroth, First, Second & Third Laws',
            content:
              'The Zeroth Law states that if two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other — this is the basis of temperature measurement. The First Law of Thermodynamics is the conservation of energy: Q − W = ΔU, where Q is heat added to the system, W is work done by the system, and ΔU is the change in internal energy. For a closed system undergoing a cyclic process, ΔU = 0 so Q_net = W_net. The Second Law states that heat flows spontaneously from hot to cold, and that no heat engine can be 100% efficient. It introduces entropy S, where for a reversible process dS = dQ/T, and for an irreversible process dS > dQ/T (entropy increases). The Third Law states that the entropy of a perfect crystalline substance at absolute zero (0 K) is zero.',
            summary:
              '• Zeroth Law: basis of temperature measurement\n• First Law: Q − W = ΔU (energy conservation)\n• For cyclic process: Q_net = W_net\n• Second Law: entropy of universe always increases (ΔS_universe ≥ 0)\n• Entropy: dS = dQ_rev/T; irreversible → dS > dQ/T\n• Third Law: S = 0 at T = 0 K for perfect crystal',
          },
          {
            id: 'engthermo-enthalpy',
            number: 'Topic 1.2',
            title: 'Enthalpy, Entropy & Carnot Efficiency',
            content:
              'Enthalpy H = U + PV is a state function useful for constant-pressure processes (most engineering equipment). For steady-flow devices: Q − W_shaft = Δh + ΔKE + ΔPE. The specific heat at constant pressure c_p = (∂h/∂T)_P and at constant volume c_v = (∂u/∂T)_V; for ideal gases: c_p − c_v = R and k = c_p/c_v (specific heat ratio). For an ideal gas: Δh = c_p ΔT and Δu = c_v ΔT. The Carnot cycle is the most efficient possible cycle operating between two temperature reservoirs: η_Carnot = 1 − T_L/T_H, where temperatures are in Kelvin. No real heat engine can exceed Carnot efficiency. The COP of a Carnot refrigerator is COP_R = T_L/(T_H − T_L) and for a heat pump COP_HP = T_H/(T_H − T_L).',
            summary:
              '• Enthalpy: H = U + PV; Δh = c_p·ΔT (ideal gas)\n• c_p − c_v = R; k = c_p/c_v (k ≈ 1.4 for air)\n• Carnot efficiency: η = 1 − T_L/T_H (T in Kelvin!)\n• Carnot COP_R = T_L/(T_H−T_L)\n• Carnot COP_HP = T_H/(T_H−T_L)\n• Entropy change: ΔS = Q_rev/T (isothermal process)',
          },
        ],
      },
      {
        id: 'engthermo-cycles',
        title: 'Power Cycles',
        sections: [
          {
            id: 'engthermo-rankine',
            number: 'Topic 2.1',
            title: 'Rankine & Brayton Cycles',
            content:
              'The Rankine cycle is the ideal cycle for steam power plants. It consists of four processes: (1) Isentropic compression in the pump (1→2): w_pump = h₂ − h₁ ≈ v₁(P₂ − P₁); (2) Constant-pressure heat addition in the boiler (2→3): q_in = h₃ − h₂; (3) Isentropic expansion in the turbine (3→4): w_turbine = h₃ − h₄; (4) Constant-pressure heat rejection in the condenser (4→1): q_out = h₄ − h₁. Rankine efficiency η = W_net/q_in = (w_turbine − w_pump)/q_in. The Brayton cycle is the ideal cycle for gas turbines. It uses two isentropic processes (compressor and turbine) and two isobaric processes (combustion chamber and heat rejection). Brayton efficiency η = 1 − 1/r_p^((k−1)/k), where r_p is the pressure ratio and k is the specific heat ratio.',
            summary:
              '• Rankine cycle: pump → boiler → turbine → condenser\n• Rankine η = (w_turb − w_pump) / q_in = W_net/q_boiler\n• Brayton cycle: compressor → combustor → turbine → heat rejection\n• Brayton η = 1 − 1/r_p^((k−1)/k)\n• Back work ratio = w_comp/w_turb (higher = less efficient)\n• Reheating, regeneration improve Rankine and Brayton efficiencies',
          },
          {
            id: 'engthermo-otto',
            number: 'Topic 2.2',
            title: 'Otto, Diesel Cycles & Refrigeration COP',
            content:
              'The Otto cycle is the ideal cycle for spark-ignition (gasoline) engines, consisting of two isentropic and two isochoric (constant-volume) processes. The thermal efficiency depends only on the compression ratio r = V_max/V_min: η_Otto = 1 − 1/r^(k−1), where k is the specific heat ratio (k ≈ 1.4 for air). The Diesel cycle is the ideal cycle for compression-ignition (diesel) engines; heat is added at constant pressure: η_Diesel = 1 − (1/r^(k−1)) × [(r_c^k − 1)/(k(r_c − 1))], where r_c is the cutoff ratio. For the same compression ratio, η_Otto > η_Diesel. The vapor-compression refrigeration cycle is the standard refrigeration cycle with COP_R = Q_L/W_net = Q_L/(Q_H − Q_L), where Q_L is the refrigeration effect and W_net is the compressor work. Higher COP means more efficient refrigeration.',
            summary:
              '• Otto efficiency: η = 1 − 1/r^(k−1); r = V_max/V_min\n• Diesel efficiency: η = 1 − (1/r^(k−1))·[(r_c^k−1)/(k(r_c−1))]\n• At same r: η_Otto > η_Diesel; Diesel has higher r in practice\n• Refrigeration COP: COP_R = Q_L/W_net = Q_L/(Q_H−Q_L)\n• Heat pump COP: COP_HP = Q_H/W_net = COP_R + 1\n• Ton of refrigeration: 1 TR = 3.517 kW = 12,000 BTU/hr',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. ENGINEERING ECONOMY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'eng-economy',
    title: 'Engineering Economy',
    shortTitle: 'Engineering Economy',
    category: 'Engineering Sciences',
    icon: 'TrendingUp',
    year: 'Board Exam Core',
    description:
      'Applies economic principles to engineering decisions, evaluating the financial viability of projects and investments. Covers interest, present/future worth, annuities, depreciation, and decision-making methods — included in all Philippine Engineering board examinations.',
    color: { light: '#14532d', dark: '#86efac', badge: '#22c55e' },
    chapters: [
      {
        id: 'engeco-time',
        title: 'Time Value of Money',
        sections: [
          {
            id: 'engeco-interest',
            number: 'Topic 1.1',
            title: 'Simple vs Compound Interest & Present/Future Worth',
            content:
              'Simple interest is calculated only on the principal: I = Pni, where P is principal, n is number of periods, and i is interest rate per period. Future amount F = P(1 + ni). Compound interest computes interest on both principal and accumulated interest: F = P(1 + i)ⁿ = P(F/P, i%, n). The factor (1 + i)ⁿ is the single-payment compound amount factor (F/P). The present worth factor (P/F) is the inverse: P = F/(1 + i)ⁿ = F(1 + i)⁻ⁿ. For continuous compounding: F = Pe^(rn), where r is the nominal rate. The effective annual interest rate i_eff = (1 + r/m)^m − 1, where r is the nominal rate and m is the number of compounding periods per year. The rule of 72 estimates doubling time: n ≈ 72/i (where i is in percent).',
            summary:
              '• Simple interest: I = Pni; F = P(1+ni)\n• Compound interest: F = P(1+i)ⁿ\n• Present worth: P = F(1+i)⁻ⁿ = F/(F/P, i%, n)\n• Effective rate: i_eff = (1+r/m)^m − 1\n• Continuous compounding: F = Pe^(rn)\n• Rule of 72: doubling time n ≈ 72/i%',
          },
          {
            id: 'engeco-annuities',
            number: 'Topic 1.2',
            title: 'Annuities & Annual Worth',
            content:
              'An annuity is a series of equal payments A made at regular intervals. For an ordinary annuity (end-of-period payments), the future worth is F = A[(1+i)ⁿ − 1]/i = A(F/A, i%, n) and the present worth is P = A[1 − (1+i)⁻ⁿ]/i = A(P/A, i%, n). The capital recovery factor converts P to A: A = P[i(1+i)ⁿ]/[(1+i)ⁿ − 1] = P(A/P, i%, n). For an annuity due (beginning-of-period payments), multiply ordinary annuity values by (1+i). A perpetuity is an annuity that continues forever: P = A/i. A gradient series has payments that increase by a uniform amount G each period; the gradient present worth factor is P = G[(1+i)ⁿ − 1 − ni]/[i²(1+i)ⁿ]. Annual worth (AW) method converts all costs and benefits to an equivalent annual amount for comparison.',
            summary:
              '• Future worth of annuity: F = A[(1+i)ⁿ−1]/i\n• Present worth of annuity: P = A[1−(1+i)⁻ⁿ]/i\n• Capital recovery: A = P·i(1+i)ⁿ/[(1+i)ⁿ−1]\n• Perpetuity: P = A/i\n• Annuity due: multiply ordinary annuity by (1+i)\n• Gradient: increasing payments by G each period',
          },
        ],
      },
      {
        id: 'engeco-analysis',
        title: 'Economic Analysis',
        sections: [
          {
            id: 'engeco-bcr',
            number: 'Topic 2.1',
            title: 'Benefit-Cost Ratio, Payback Period & Rate of Return',
            content:
              'The Benefit-Cost Ratio (BCR) compares the present worth of benefits to costs: BCR = PW(Benefits) / PW(Costs). A project is acceptable if BCR ≥ 1.0. The payback period is the time required to recover the initial investment from net cash flows: n_payback = First Cost / Net Annual Benefit (simple payback, ignoring time value). The Discounted Payback Period accounts for time value of money. Net Present Value (NPV) = PW(Benefits) − PW(Costs); accept if NPV ≥ 0. The Rate of Return (ROR) or Internal Rate of Return (IRR) is the interest rate at which NPV = 0; a project is acceptable if IRR ≥ minimum attractive rate of return (MARR). The Annual Worth (AW) method is preferred for comparing alternatives with different lives. For mutually exclusive alternatives, the incremental ROR method evaluates the return on the additional investment.',
            summary:
              '• BCR = PW(Benefits)/PW(Costs); accept if BCR ≥ 1.0\n• Simple payback = First Cost / Annual Net Benefit\n• NPV = PW(Benefits) − PW(Costs); accept if NPV ≥ 0\n• IRR = interest rate where NPV = 0; accept if IRR ≥ MARR\n• Annual Worth: convert all cash flows to equivalent annual amount\n• Incremental analysis required for mutually exclusive alternatives',
          },
          {
            id: 'engeco-depreciation',
            number: 'Topic 2.2',
            title: 'Depreciation: Straight-Line, SYD & Declining Balance',
            content:
              'Depreciation is the systematic allocation of the cost of an asset over its useful life. The Straight-Line (SL) method charges equal depreciation each year: d = (FC − SV) / n, where FC is first cost, SV is salvage value, and n is useful life. The book value at end of year k is BV_k = FC − k·d. The Sum-of-Years-Digits (SYD) method front-loads depreciation: d_k = (n−k+1)/SYD × (FC − SV), where SYD = n(n+1)/2. The Declining Balance (DB) method applies a constant rate R to the current book value: d_k = R × BV_{k-1}, where R = 1 − (SV/FC)^(1/n) for exact match to salvage value, or R = 2/n for the Double Declining Balance (DDB) method. DDB never reaches zero book value, so it is often switched to SL in the final years. The Modified Accelerated Cost Recovery System (MACRS) is used for U.S. tax depreciation but is referenced in board exams for comparison.',
            summary:
              '• Straight-line: d = (FC−SV)/n; uniform annual charge\n• SYD: d_k = [(n−k+1)/SYD]×(FC−SV); SYD = n(n+1)/2\n• Declining Balance: d_k = R×BV_{k-1}; R = 1−(SV/FC)^(1/n)\n• Double Declining Balance: R = 2/n\n• Book value SL: BV_k = FC − k·d\n• Accelerated methods (SYD, DB) give higher early depreciation',
          },
        ],
      },
    ],
  },
];

export default ENGINEERING_TOPICS;

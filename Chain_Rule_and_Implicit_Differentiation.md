# Chain Rule and Implicit Differentiation

## 1. The Chain Rule (Nested Function Rule)

### Concept
Composite functions are functions inside other functions.

### Example form
`y = f(g(x))`

### Derivative rule
`dy/dx = f'(g(x)) * g'(x)`

---

### Example 1
`y = (3x^2 + 5)^7`

**Outer derivative:**
`7(3x^2 + 5)^6`

**Inner derivative:**
`6x`

**Final derivative:**
`dy/dx = 42x(3x^2 + 5)^6`

---

### Example 2
`y = sqrt(x^4 - 2x)`

Rewrite:
`y = (x^4 - 2x)^(1/2)`

**Derivative:**
`dy/dx = (1/2)(x^4 - 2x)^(-1/2) * (4x^3 - 2)`

**Simplified:**
`dy/dx = (4x^3 - 2)/(2sqrt(x^4 - 2x))`

---

### Example 3
`y = sin(5x^3)`

**Outer derivative:**
`cos(5x^3)`

**Inner derivative:**
`15x^2`

**Final derivative:**
`dy/dx = 15x^2 cos(5x^3)`

---

### Example 4
`y = (cos(4x))^2`

`dy/dx = 2cos(4x) * (-sin(4x)) * 4`

**Final:**
`dy/dx = -8cos(4x)sin(4x)`

---

### Example 5
`y = (x^2 + 10)^(-3)`

**Derivative:**
`dy/dx = -6x(x^2 + 10)^(-4)`

---

## 2. Implicit Differentiation

### Concept
Implicit equations do not isolate y.

### Example
`x^2 + y^2 = 25`

Differentiate both sides with respect to x.

> Remember: Whenever differentiating y, attach `dy/dx`.

---

### Example 1
`x^2 + y^2 = 25`

**Derivative:**
`2x + 2y(dy/dx) = 0`

**Solve:**
`dy/dx = -x/y`

---

### Example 2
`x^2 + xy + y^2 = 10`

**Derivative:**
`2x + x(dy/dx) + y + 2y(dy/dx) = 0`

**Group terms:**
`(x + 2y)dy/dx = -(2x + y)`

**Final:**
`dy/dx = -(2x + y)/(x + 2y)`

---

### Example 3
`xy = 5`

**Derivative:**
`x(dy/dx) + y = 0`

**Solve:**
`dy/dx = -y/x`

---

## 3. Practice Exercises

### Chain Rule
1. `y = (2x^3 + 1)^5`
2. `y = sqrt(x^2 + 4x)`
3. `y = sin(3x^2)`
4. `y = (cos x)^4`
5. `y = (x^3 + 7)^(-2)`

### Implicit Differentiation
1. `x^2 + y^2 = 16`
2. `x^2 + xy = 8`
3. `x^2y + y = 3`
4. `x^3 + y^3 = 9`
5. `xy + y^2 = 10`

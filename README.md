# ByteForge

### Number System Conversion Toolkit

ByteForge is a lightweight, browser-based number system conversion toolkit for converting values between **Decimal, Binary, Octal, and Hexadecimal**.

It is designed to make number-system conversion fast, clear, and easy to understand while also providing step-by-step calculations, binary visualization, and local conversion history.

---

## Overview

Working with different number systems is fundamental to computer science, programming, networking, digital electronics, and low-level computing.

ByteForge provides a clean interface for converting numbers between the four most commonly used positional number systems:

- Decimal — Base 10
- Binary — Base 2
- Octal — Base 8
- Hexadecimal — Base 16

Instead of simply returning a converted value, ByteForge also helps users understand **how the conversion is performed**.

---

## Features

### 🔢 Multi-Base Conversion

Convert values between:

| Number System | Base | Example |
|---|---:|---|
| Decimal | 10 | `255` |
| Binary | 2 | `11111111` |
| Octal | 8 | `377` |
| Hexadecimal | 16 | `FF` |

---

### ⚡ Instant Results

Enter a value, select its input base, and ByteForge generates the equivalent representations across all supported number systems.

Example:

```text
Input:
255

Decimal:      255
Binary:       11111111
Octal:        377
Hexadecimal:  FF
````

---

### 🧮 Step-by-Step Conversion

ByteForge explains the mathematical process behind conversions.

For example:

```text
101101₂

= (1 × 2⁵)
+ (0 × 2⁴)
+ (1 × 2³)
+ (1 × 2²)
+ (0 × 2¹)
+ (1 × 2⁰)

= 32 + 0 + 8 + 4 + 0 + 1

= 45₁₀
```

This makes ByteForge useful not only as a utility but also as a learning tool.

---

### 🧩 Binary Visualization

Decimal values can be represented visually at the bit level.

Example:

```text
128  64  32  16   8   4   2   1
  0   0   1   0   1   1   0   1
```

This helps users understand how individual bits contribute to a binary value.

---

### ✅ Input Validation

ByteForge validates values according to the selected base.

Examples:

```text
Binary:
101101   ✓
101201   ✗
```

```text
Hexadecimal:
A7F2     ✓
G821     ✗
```

Invalid values are rejected before conversion.

---

### 📋 Copy Results

Each conversion result includes a copy action, allowing users to quickly copy decimal, binary, octal, or hexadecimal values.

---

### 🕘 Conversion History

ByteForge stores recent conversions locally in the browser using `localStorage`.

History includes:

* Input value
* Input base
* Decimal equivalent
* Recent conversion entries

No account or server is required.

---

### 📱 Responsive Interface

The interface adapts to:

* Desktop
* Laptop
* Tablet
* Mobile

The conversion workspace automatically reorganizes itself for smaller screens.

---

## Design Philosophy

ByteForge uses a **technical instrumentation-inspired interface** designed around the concepts of:

* Binary systems
* Low-level computing
* Digital electronics
* Developer tooling
* Numerical precision

The interface intentionally uses a compact visual language, monospace typography, structured panels, and subtle binary-inspired details.

---

## Technology Stack

ByteForge is built entirely with browser-native technologies.

| Technology            | Purpose                                 |
| --------------------- | --------------------------------------- |
| HTML5                 | Application structure                   |
| CSS3                  | Interface and responsive design         |
| JavaScript            | Conversion engine and application logic |
| LocalStorage          | Conversion history                      |
| Browser Clipboard API | Copy functionality                      |

### No Framework Required

ByteForge does not depend on:

* React
* Vue
* Angular
* Bootstrap
* Tailwind CSS
* Backend services
* Database systems

This keeps the project lightweight and easy to understand.

---

## Project Structure

```text
ByteForge/
│
├── index.html
├── README.md
├── LICENSE
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    ├── converter.js
    ├── validator.js
    ├── renderer.js
    └── storage.js
```

---

## Architecture

ByteForge separates application responsibilities into independent JavaScript modules.

### `app.js`

Acts as the main application controller.

Responsibilities:

* Handle user interaction
* Trigger conversions
* Connect application modules
* Manage UI events
* Coordinate history updates

---

### `converter.js`

Contains the core number conversion engine.

Responsibilities:

* Convert input to decimal
* Convert decimal to other bases
* Generate conversion results
* Generate calculation steps
* Generate binary representation

---

### `validator.js`

Responsible for validating user input.

Responsibilities:

* Validate binary values
* Validate decimal values
* Validate octal values
* Validate hexadecimal values
* Detect unsupported values
* Return validation errors

---

### `renderer.js`

Responsible for updating the interface.

Responsibilities:

* Render conversion results
* Render calculation steps
* Render binary visualization
* Render conversion history
* Update application status
* Display validation errors

---

### `storage.js`

Provides local browser persistence.

Responsibilities:

* Save conversion history
* Retrieve previous conversions
* Limit stored history
* Clear stored history
* Safely handle invalid local data

---

## Conversion Logic

ByteForge follows standard positional numeral-system conversion.

### Binary → Decimal

For a binary number:

```text
101101₂
```

the decimal value is calculated as:

```text
1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰
```

which produces:

```text
45₁₀
```

---

### Decimal → Binary

Decimal values are converted using the standard base conversion algorithm implemented through JavaScript's numeric representation methods.

Example:

```text
45₁₀ → 101101₂
```

---

### Decimal → Octal

```text
255₁₀ → 377₈
```

---

### Decimal → Hexadecimal

```text
255₁₀ → FF₁₆
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pokhrelsamir/ByteForge.git
```

### 2. Navigate to the Project

```bash
cd ByteForge
```

### 3. Run the Application

Because ByteForge is a static frontend application, it can be opened directly:

```text
index.html
```

Alternatively, use a local development server such as VS Code Live Server.

---

## Usage

### Step 1 — Enter a Value

Enter a number into the input field.

Example:

```text
255
```

### Step 2 — Select the Input Base

Choose the appropriate number system:

```text
Decimal — Base 10
Binary — Base 2
Octal — Base 8
Hexadecimal — Base 16
```

### Step 3 — Convert

Click:

```text
Convert Value
```

### Step 4 — Explore

ByteForge displays:

* Decimal value
* Binary value
* Octal value
* Hexadecimal value
* Conversion calculation
* Binary bit representation

---

## Example

Input:

```text
FF
```

Input Base:

```text
Hexadecimal — Base 16
```

Output:

```text
Decimal:      255
Binary:       11111111
Octal:        377
Hexadecimal:  FF
```

---

## Browser Compatibility

ByteForge is designed for modern browsers supporting:

* ES6 JavaScript
* CSS Grid
* CSS Flexbox
* LocalStorage
* Clipboard API

Recommended browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## Privacy

ByteForge operates entirely on the client side.

No conversion data is sent to a remote server.

Conversion history is stored locally in the browser using:

```text
localStorage
```

Clearing the browser's site data will also remove stored ByteForge history.

---

## Performance

ByteForge is intentionally lightweight.

There are:

* No backend requests
* No database
* No external framework dependencies
* No build process
* No external API requirements

The conversion process occurs directly inside the browser.

---

## Future Improvements

Potential future versions may introduce:

* [ ] Bitwise AND / OR / XOR operations
* [ ] Bitwise NOT
* [ ] Left and right bit shifting
* [ ] Two's complement representation
* [ ] Signed integer visualization
* [ ] ASCII ↔ Binary conversion
* [ ] Binary ↔ ASCII conversion
* [ ] Hexadecimal color converter
* [ ] IP address ↔ Binary conversion
* [ ] Larger integer support
* [ ] Export conversion history
* [ ] Import/export saved sessions
* [ ] Keyboard shortcuts
* [ ] Advanced bit grouping
* [ ] Conversion history search

---

## Learning Objectives

ByteForge demonstrates practical understanding of:

* Number systems
* Positional notation
* Base conversion
* Binary representation
* Input validation
* JavaScript number handling
* DOM manipulation
* Event-driven programming
* Modular JavaScript architecture
* Browser LocalStorage
* Clipboard APIs
* Responsive web design
* Client-side application development

---

## Project Goals

The primary goals of ByteForge are to provide:

1. **Accuracy** — Reliable base conversion.
2. **Clarity** — Easy-to-understand results.
3. **Education** — Transparent conversion calculations.
4. **Usability** — Fast and intuitive interaction.
5. **Performance** — Lightweight client-side execution.
6. **Maintainability** — Modular JavaScript architecture.

---

## License

ByteForge is released under the **MIT License**.

See the [`LICENSE`](LICENSE) file for complete license information.

---

## Author

**Samir Pokhrel**

Computer Science Student & Developer

---
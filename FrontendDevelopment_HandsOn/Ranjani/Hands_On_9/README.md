# Frontend Development - Hands_On_9

## Name
**Ranjani A**

## Course
Frontend Development

## Hands-On 9
**Web Accessibility (a11y) & Cross-Browser Compatibility**

---

# Objective

The objective of this hands-on is to understand and implement Web Accessibility (a11y) practices based on WCAG 2.1 guidelines and improve cross-browser compatibility.

This exercise demonstrates accessibility auditing using Lighthouse, semantic HTML improvements, ARIA attributes, keyboard navigation, colour contrast validation, feature detection, and browser compatibility testing.

---

# Task 1 – Accessibility Audit & Semantic Fixes

## Aim

To perform an accessibility audit and fix semantic HTML issues to improve usability for users with assistive technologies.

## Features Implemented

- Lighthouse accessibility audit using browser developer tools
- Accessibility score improvement
- Added missing alt attributes for images
- Added labels for form inputs
- Improved heading hierarchy
- Replaced non-semantic interactive elements with proper HTML elements
- Improved page structure using semantic HTML tags

## Accessibility Issues Fixed

Initial Lighthouse Issues:

- Missing image alternative text
- Missing form labels
- Heading hierarchy issues

Final Result:

- All images contain proper alt attributes
- All inputs have associated labels
- Heading structure follows proper hierarchy

## Expected Output

- Improved Lighthouse accessibility score
- Screen readers can understand page content
- Forms and navigation are accessible

---

# Task 2 – ARIA & Keyboard Navigation

## Aim

To add ARIA attributes and make all interactive elements accessible using keyboard navigation.

## Features Implemented

- Added `aria-label` to navigation
- Added `aria-current="page"` for active navigation links
- Added keyboard accessibility to course cards
- Added `tabindex="0"` for focusable cards
- Added Enter key interaction for course cards
- Added `role="status"` and `aria-live="polite"` for search result updates
- Added `aria-expanded` attribute for expandable menu
- Tested complete keyboard navigation using Tab key

## Expected Output

- All interactive elements are reachable through keyboard
- Enter key works on focused course cards
- Screen readers announce dynamic content updates
- Navigation state is accessible

---

# Task 3 – Colour Contrast & Cross-Browser Testing

## Aim

To verify colour accessibility standards and test application compatibility across browsers.

## Features Implemented

- Checked colour contrast ratio using WCAG standards
- Improved text and background colour combinations
- Documented before and after colour values
- Tested CSS feature support using Can I Use
- Implemented CSS feature detection
- Added CSS variables polyfill
- Tested layout consistency across browsers

## Colour Contrast Improvement

Before:

```
Text Colour: #777777
Background: #ffffff
Contrast Ratio: 4.48:1
Status: Failed
```

After:

```
Text Colour: #333333
Background: #ffffff
Contrast Ratio: 12.63:1
Status: Passed
```

## Browser Testing

Tested Browsers:

- Brave Browser
- Microsoft Edge

Verified:

- Font rendering
- Flexbox layout
- Card alignment
- Button appearance

## Expected Output

- All text satisfies WCAG AA contrast requirements
- Layout works consistently across browsers
- CSS feature compatibility is documented

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- Chrome/Brave DevTools Lighthouse
- ARIA Accessibility Standards
- WCAG 2.1 Guidelines
- Can I Use Browser Compatibility Tool
- CSS Variables Polyfill

---

# Folder Structure

```
Hands_On_9
│
├── task1
│   └── student-portal-accessibility
│       ├── index.html
│       ├── style.css
│       └── script.js
│
├── task2
│   └── student-portal-aria
│       ├── index.html
│       ├── style.css
│       └── script.js
│
├── task3
│   └── student-portal-browser-test
│       ├── index.html
│       ├── style.css
│       └── script.js
│
└── README.md
```

---

# Learning Outcome

After completing this hands-on, I learned to:

- Perform accessibility audits using Lighthouse.
- Apply WCAG 2.1 accessibility principles.
- Improve semantic HTML structure.
- Use ARIA attributes correctly.
- Build keyboard-accessible web interfaces.
- Implement accessible navigation.
- Validate colour contrast ratios.
- Perform cross-browser compatibility testing.
- Use feature detection instead of browser detection.
- Understand CSS feature support and polyfills.

---

# Result

Successfully completed Web Accessibility and Cross-Browser Compatibility concepts by auditing, improving, and testing the Student Portal application.

The application achieved improved accessibility compliance with semantic HTML, ARIA support, keyboard navigation, colour contrast validation, and browser compatibility testing.
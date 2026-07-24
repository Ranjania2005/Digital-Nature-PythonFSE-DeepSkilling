# QA Concepts & Selenium Basics - Hands_On_4

## Module
QA Concepts & Selenium Basics

## Hands-On Title
Selenium WebDriver Setup, Browser Drivers & Basic Commands

---

## Objective

The objective of this hands-on is to understand Selenium WebDriver architecture and set up a basic Selenium automation environment using Python.

This exercise focuses on configuring Selenium WebDriver, managing browser drivers automatically using webdriver-manager, executing browser commands, handling browser windows, navigating between pages, and capturing screenshots.

---

# Task 1 - Selenium Architecture and Environment Setup

## Objective

Understand the Selenium components and create the first Selenium WebDriver automation script.

## Features Implemented

- Installed Selenium and webdriver-manager packages.
- Configured Chrome WebDriver using webdriver-manager.
- Automated Chrome browser launch using Selenium WebDriver.
- Added Selenium architecture documentation:
  - WebDriver
  - Selenium Grid
  - Selenium IDE
- Opened LambdaTest Selenium Playground website.
- Printed the webpage title using Selenium.
- Implemented implicit wait using:

```python
driver.implicitly_wait(10)
```

- Executed the browser in headless mode using ChromeOptions.
- Closed the browser using:

```python
driver.quit()
```

---

# Task 2 - WebDriver Navigation and Window Commands

## Objective

Use Selenium WebDriver commands for navigation, multiple window handling, and screenshot capture.

## Features Implemented

- Opened Selenium Playground website.
- Navigated to Simple Form Demo page.
- Verified URL using assertion:

```python
assert "simple-form-demo" in driver.current_url
```

- Navigated back using:

```python
driver.back()
```

- Opened a new browser tab using JavaScript execution.
- Retrieved browser tabs using:

```python
driver.window_handles
```

- Switched between browser windows.
- Printed Google page title.
- Retrieved browser window size using:

```python
driver.get_window_size()
```

- Changed browser window size using:

```python
driver.set_window_size(1280,800)
```

- Captured screenshot using:

```python
driver.save_screenshot()
```

---

# Folder Structure

```
Hands_On_4
│
├── Task_1
│   ├── setup_test.py
│   └── requirements.txt
│
├── Task_2
│   ├── navigation_test.py
│   ├── playground_screenshot.png
│   └── requirements.txt
│
├── Screenshots
│   ├── Task1_Output.png
│   └── Task2_Output.png
│
└── README.md
```

---

# Technologies Used

- Python 3.13
- Selenium WebDriver
- webdriver-manager
- PyTest
- Google Chrome / Chromium-based Browser
- Visual Studio Code

---

# Software Requirements

- Python 3.10+
- VS Code
- Chrome or Chromium-based browser
- Selenium package
- webdriver-manager package
- pytest package

---

# Expected Output

## Task 1

- Selenium WebDriver launches the browser successfully.
- LambdaTest Selenium Playground page opens.
- Page title is displayed in the terminal.
- Browser runs successfully in headless mode.
- Browser closes automatically after execution.

## Task 2

- Selenium Playground opens successfully.
- Simple Form Demo navigation works.
- URL validation passes.
- Browser back navigation works.
- New browser tab opens successfully.
- Google page title is displayed.
- Browser switches between tabs successfully.
- Screenshot is generated successfully.
- Browser window size is updated.

---

# Screenshots

The following screenshots are included in the **Screenshots** folder:

- Task1_Output.png
- Task2_Output.png

The following automation output file is generated:

- playground_screenshot.png

---

# Learning Outcomes

After completing this hands-on, the following concepts were learned:

- Selenium WebDriver Architecture
- Browser Automation Basics
- ChromeDriver Management using webdriver-manager
- Selenium WebDriver Commands
- Browser Navigation Handling
- Multiple Window and Tab Handling
- Browser Window Size Management
- Headless Browser Execution
- Screenshot Capture using Selenium
- Importance of Implicit and Explicit Waits

---

# Author

**Name:** Ranjani A

**Track:** Python Full Stack Engineer

**Program:** Cognizant Digital Nurture 5.0
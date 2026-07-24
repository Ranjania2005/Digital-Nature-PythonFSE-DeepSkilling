"""
Hands-On 4 - Task 1

Selenium Architecture

1. WebDriver
- WebDriver is the core Selenium component that communicates with the browser.
- It sends commands from Python to the browser through the browser driver.

2. Selenium Grid
- Selenium Grid allows running automated tests on multiple browsers,
  operating systems, and machines simultaneously.

3. Selenium IDE
- Selenium IDE is a browser extension used to record, playback,
  and generate automation scripts.
"""

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Configure Chrome options
options = webdriver.ChromeOptions()

# Run Chrome in Headless Mode
options.add_argument("--headless=new")

# Launch Chrome using WebDriver Manager
driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options
)

# Implicit Wait
driver.implicitly_wait(10)

# Note:
# Implicit wait applies globally to every element lookup.
# Explicit waits are preferred because they wait only for
# specific elements or conditions, making tests more efficient.

# Open LambdaTest Selenium Playground
driver.get("https://www.lambdatest.com/selenium-playground/")

# Print Page Title
print("Page Title:", driver.title)

# Close Browser
driver.quit()
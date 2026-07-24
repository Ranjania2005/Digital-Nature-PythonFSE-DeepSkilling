from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time


# Chrome options
options = webdriver.ChromeOptions()

# Run browser in headless mode
options.add_argument("--headless=new")


# Launch Chrome
driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options
)


# Open Selenium Playground
driver.get("https://www.lambdatest.com/selenium-playground/")

print("Main Page Title:", driver.title)


# Click Simple Form Demo link
simple_form = driver.find_element(
    "link text",
    "Simple Form Demo"
)

simple_form.click()


# Verify URL contains simple-form-demo
assert "simple-form-demo" in driver.current_url

print("Simple Form Demo URL verified")


# Navigate back
driver.back()

print("Returned to Playground")


# Open Google in new tab
driver.execute_script(
    "window.open('https://www.google.com');"
)


# Get all tabs
tabs = driver.window_handles

print("Number of tabs:", len(tabs))


# Switch to Google tab
driver.switch_to.window(tabs[1])


print("Google Title:", driver.title)


# Switch back to original tab
driver.switch_to.window(tabs[0])


# Window size handling

current_size = driver.get_window_size()

print("Current Window Size:", current_size)


driver.set_window_size(1280, 800)

print("Window size changed to 1280x800")


# Screenshot

driver.save_screenshot(
    "playground_screenshot.png"
)

print("Screenshot saved")


# Close browser

driver.quit()
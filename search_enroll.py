import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])

driver = webdriver.Chrome(options=options)
vars = {}

driver.get("http://localhost:3000/")
driver.set_window_size(828, 824)
driver.find_element(By.ID, "email").click()
driver.find_element(By.ID, "email").send_keys("trainee1@gmail.com")
driver.find_element(By.ID, "password").click()
driver.find_element(By.ID, "password").send_keys("trainee1")
driver.find_element(By.ID, "password").send_keys(Keys.ENTER)
try:
  elem = WebDriverWait(driver, 30).until(
  EC.presence_of_element_located((By.ID, "trainer_data")) 
  )
finally:
  driver.find_element(By.ID, "search_gym").click()
  driver.find_element(By.ID, "demo-simple-select").click()
  try:
    elem = WebDriverWait(driver, 30).until(
      EC.presence_of_element_located((By.ID, "selected_gym")) 
    )
  finally:
    driver.find_element(By.ID, "selected_gym").click()
    driver.find_element(By.ID, "demo-simple-select-2").click()
    try:
      elem = WebDriverWait(driver, 30).until(
      EC.presence_of_element_located((By.ID, "selected_trainer")) 
    )
    finally:
      driver.find_element(By.ID, "selected_trainer").click()
      driver.quit()

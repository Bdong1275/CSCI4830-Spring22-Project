package com.example.tests;

import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class usernameTest1 {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();
  JavascriptExecutor js;
  @Before
  public void setUp() throws Exception {
    System.setProperty("webdriver.chrome.driver", "lib\\win\\chromedriver.exe");
    driver = new ChromeDriver();
    baseUrl = "https://www.google.com/";
    driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
    js = (JavascriptExecutor) driver;
  }

  @Test
  public void testSubmit() throws Exception {
    driver.get("http://127.0.0.1:5500/CSCI4830-Spring22-Project/welcome.html");
    driver.findElement(By.id("myText")).click();
    driver.findElement(By.id("myText")).clear();
    driver.findElement(By.id("myText")).sendKeys("name");
    
    //length < 10
    String expected = "name";
    String result = driver.findElement(By.id("myText")).getAttribute("value");
    Assert.assertEquals(expected, result);
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }
}

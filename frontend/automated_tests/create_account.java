import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;

public class TestSample {
    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver", "C:/Users/aleaw/OneDrive/Documents/ChromeDriver/chromedriver.exe");

        WebDriver driver = new ChromeDriver();

        try {
            driver.get("http://localhost:3000/");

            WebElement getStartedButton = driver.findElement(By.linkText("Get Started"));
            getStartedButton.click();

            WebElement nameField = driver.findElement(By.name("name"));
            nameField.sendKeys("Pete");

            WebElement emailField = driver.findElement(By.name("email"));
            emailField.sendKeys("pete@gmail.com");

            WebElement createAccountButton = driver.findElement(By.name("Create Account"));
            createAccountButton.click();

            Thread.sleep(3000);

            driver.quit();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

    }
}


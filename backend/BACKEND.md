# Backend Documentation Goes Here

To create backend (only done when creating a new backend): 

```bash
curl https://start.spring.io/starter.zip \
  -d dependencies=web \
  -d type=maven-project \
  -d language=java \
  -d name=cashcontrol \
  -d packageName=com.cashcontrol \
  -d baseDir=. \
  -o temp.zip && unzip -o temp.zip && rm temp.zip
```
## YOU MUST INSTALL H2 DATABASE!!
The link can be found here 
 |
 \/
https://www.h2database.com/html/main.html



To run backend use: `./mvnw spring-boot:run`
 - if error occurs, besure to add execute permissions to mvnw: `chmod +x mvnw`


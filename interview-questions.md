# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
  - It means it has a model which is the backend or database and a View which is the front end stuff and html that will be displayed depending on the decision made by the controller.

  Researched answer:
  - The majority of OOP (Object Oriented Programming) applications can benefit from the MVC pattern. Using such a pattern will make the code more reusable and enhance the interface definition since each layer takes care of its tasks. In practice, if you need to change or implement a feature in your code at some point, this change/implementation would be much more flexible and straightforward with MVC, avoiding big changes and refactorings in your code.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:
  - CRUD stands for create, read, update, and delete. It means you can react with the website or application such as posting a text or viewing others people's post in a blog site for example.

  Researched answer:
  - CRUD stands for create, read, update, and delete and it means the basic operations to be done in a data repository. You directly handle records or data objects; apart from these operations, the records are passive entities. Typically it's just database tables and records.



3. What is a migration? Why would you use one?

  Your answer:
  - it's updating your schema after you create or make a change to a model.

  Researched answer:
  - Rails Migration allows you to use Ruby to define changes to your database schema, making it possible to use a version control system to keep things synchronized with the actual code.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer:
  - a computer is owned by the person and a person can have many computers. the foreign key would go to the computer model since there will be more than one and they will need to link.

  Researched answer: 
  -the computer would hold the foreign key since it belongs to the person.



5. What is object-relational mapping?

  Your answer: its what lets you use ruby code to commmunicate with the database and translates it to SQL.

  Researched answer:
  - object-relational mapping is a technique that lets you query and manipulate data from a database using an object-oriented paradigm.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: a conventional pattern to follow when structuring different routes for interacting with the server whenever an HTTP request is made by the client.

- JSON: JSON stands for JavaScript Object Notation and it is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML. Squarespace uses JSON to store and organize site content created with the CMS.

- API: Application Programming Interface  is a software intermediary that allows two applications to talk to each other.

- Endpoints: an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.



- Strong params: It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.

In addition, parameters can be marked as required and flow through a predefined raise/rescue flow to end up as a 400 Bad Request with no effort.

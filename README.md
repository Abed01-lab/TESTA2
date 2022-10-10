## 1.1 Identify the types of testing you would perform on a computer mouse,to make sure that it is of the highest quality.

1. Test the range of DPI possibilities to see if it fits whatever the mouse is used for.

2. In case of a wireless mouse you would test the battery uptime.

3. Test durability of buttons. Can it last for years without having to be replaced?

4. Test the weight of the mouse.

5. Test if the grip is comfortable

## 1.2 Find a story where a software system defect had a bad outcome. Describe what happened. Can you identify a test that would have prevented it?

Facebook security breach 2021

A user from a hacking forum published the phone numbers and personal data of 500 million Facebook users in april 2021. The exposed data includes their phone numbers, Facebook IDs, full names, locations, birthdates, bios, and, in some cases, email addresses. The data was exposed all the way back in 2019 due to an API bug that allowed the hacker to scrape data from it. The hacker was able to use the “reset password” option to also figure out the phone numbers from these people. Facebook patched it back then but the damage was already done with all the information being public. It's obviously crazy an API with this much personal information could be reached and testing the accessibility should be a top priority. Some kind of scraping test should have been in place to make sure it wouldn’t be possible without being an admin in the system.

## 3.1 Investigate JUnit5 (Jupiter). Explain the following, and how they are useful

- @Tag is a repeatable annotation that is used to declare a tag for the annotated test class or test method. Tags are used to filter which tests are executed for a given test plan. For example, a development team may tag tests with values such as "fast", "slow", "ci-server", etc. and then supply a list of tags to be used for the current test plan, potentially dependent on the current environment.

- @Disabled is used to signal that the annotated test class or test method is currently disabled and should not be executed.

- @RepeatedTest is used to signal that the annotated method is a test template method that should be repeated a specified number of times with a configurable display name.

- @BeforeEach annotation is used to signal that the annotated method should be executed before other @Test classes inside the class

- @AfterEach annotation is used to signal that the annotated method should be executed after other @Test classes inside the class

- @BeforeAll is used to signal that the annotated method should be executed before all tests in the current test class.

- @AfterAll is used to signal that the annotated method should be executed after all tests in the current test class.

- @DisplayName is used to declare a custom display name for the annotated test class or test method. Display names are typically used for test reporting in IDEs and build tools and may contain spaces, special characters, and even emoji.

- @Nested is used to signal that the annotated class is a nested, non-static test class (i.e., an inner class) that can share setup and state with an instance of its enclosing class.

- The assumeTrue() method validates the given assumption to be true and if the assumption is true – the test proceed, otherwise, test execution is aborted.

- The assumeFalse()method validates the given assumption to be false and if the assumption is false – the test proceed, otherwise, test execution is aborted.

## 3.2 Mocking Frameworks

Mockito is a mocking framework used for unit testing in Java applications. The main purpose of using this framework is to simplify the development of a test by mocking external dependencies and use them in the test code. It basically allows you to create objects of a service and the mocked object returns dummy data and avoids external dependencies.
As a result it provides a simple test code that is easy to read, understand, and modify.

JUnit is an annotation based framework and helps prioritizing which tests should be executed and when. As seen in question 3.1, there are a lot of options to make unit testing easier

Both of the frameworks help with testing but their purposes are slightly different. JUnit gives the user control over when specific tests are executed but doesn’t help creating test classes the same way Mockito does. It's hard to say which one is best but it could be argued that Mockito saves the developer more time due to its simplicity and being easy to read. While the JUnit annotations are very helpful they are not always a necessity. Both frameworks are good quality.

## Description

1.Create a functional component named Greeting that displays a simple "Hello, React!" message on the screen.
Import and render the Greeting component in the App component.

2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data.

3.Create a functional component named Weather that accepts a prop called temperature (a number).
Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
Import and render the Weather component in the App component with different temperature values.

4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
Display the updated count on the screen.

5.Create a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks.

6.Create a functional component named Button that accepts props for text and color.
Style the button using inline styles or CSS classes based on the color prop.

## Learning

1.JSX and Fragments
2.Functional Component
3.Props
4.Hooks and UseState

## Description

1.Create a functional component called Counter.
Inside the component, use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
When the user clicks on the buttons, update the count state accordingly.

2.Create a functional component called PersonForm.
Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
Render three input fields for the user to enter their first name, last name, and age.
As the user types, update the respective state variables.
Display the entered information below the input fields.

3.Create a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not).

4.Create a functional component called RandomNumberGenerator.
Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
Render the current value of randomNumber.
Add a button that generates a new random number and updates the state when clicked.

5.Create a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.
Update the count using the specified step value when the buttons are clicked.

6.Create a functional component called Clock.
Use the useState hook to manage a state variable named time initialized to the current time.
Use the useEffect hook to update the time state every second to display the current time.
Render the current time in a <p> element.
When the component unmounts, clear the interval to stop updating the time.

7.Create a functional component called Notification.
Use the useState hook to manage a state variable named message initialized to an empty string.
Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
Render the notification message in a <div> element.
After 5 seconds, clear the message to hide the notification.

8.Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression.

9.Create a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme.

10.Develop a language switcher application using the useContext hook.
Create a context to manage the current language (e.g., English or Spanish).
Provide buttons to switch between languages.
Use the useContext hook to access the current language value.
Display different language versions of the application's content.

11.Build a shopping cart application using the useContext hook.
Set up a context to manage the state of the shopping cart.
Create components to display products and a shopping cart.
Use the useContext hook to access the cart state and update it.
Allow users to add and remove items from the cart.
Display the total price of items in the cart.

12.Create a simple voting application using the useReducer hook.
Set up a reducer to manage the votes for different options.
Create buttons representing voting options.
Use the useReducer hook to access the votes state and dispatch actions.
Allow users to vote for their preferred options.
Display the current vote count for each option.

13.create two components: Parent and Child.
In the Parent component, maintain a count state.
Pass a callback function from the Parent to the Child that increments the count.
Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
Display the count in the Child component.
Implement a button in the Child component that resets the count to zero when clicked.

14.create a component that displays a list of tasks.
Each task has a "Complete" button.
Implement a feature where clicking the "Complete" button marks the task as completed.
Use the useCallback hook to create dynamic callback functions for each task.
Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

15.Create a functional component named StudentList that displays a list of student names..
Define an array of student names as a constant within the component.
Use the useMemo hook to memoize the list of student names.
Render the list of student names on the screen.
Include a button that, when clicked, appends a new student name to the list.

16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
Define an array of employee objects, where each object has a name and salary property.
Use the useMemo hook to calculate the average salary of employees.
Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
Render the average salary on the screen.
Include a button that, when clicked, updates the employee data with new salaries.

17.Build a custom hook named useClipboard for copying text to the clipboard.
Implement a useClipboard hook that takes a text value as a parameter.
Use the document.execCommand API to copy the provided text to the clipboard.
Return a success status and methods to trigger the copying action.
Develop a component that uses the useClipboard hook to provide a copy button for text.

18.Design a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.
Develop a component that uses the useLocalStorage hook to manage user preferences.

19.Build a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown.

## Learning

1.JSX and Fragments
2.Functional Component
3.Props
4.useState hook
5.useEffect hook
6.useCallback hook
7.useContext hook
8.useMemo hook
9.Custom hook
10.useReducer hook

## Description

use useNavigate from react-router-dom to re-direct to other pages in some questions
1.create two components: a parent component that acts as a provider and a child component that consumes the context.
Create a context to manage a user's authentication status (logged in or out).
Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."

2.Extend the previous application to demonstrate the use of nested contexts.
Create a new context to manage user preferences (e.g., theme preference).
Modify the parent component to provide both the authentication and preferences contexts.
Create a child component that consumes both contexts.
Allow the user to change their theme preference (light/dark) using a button in the child component.
Display the theme preference in the UI and adjust the component's styling accordingly.

3.creat pages: Home and About.
Implement routing using React Router DOM.
Create navigation links to switch between the Home and About pages.
Display appropriate content on each page.
Add a "404 Not Found" page for any invalid routes.

4.Enhance the previous application by adding protected routes that require authentication.
Create a login page with a form that accepts a username and password.
Implement authentication logic (e.g., hardcode a username and password for now).
Secure the About page so that it can only be accessed by authenticated users.
Redirect unauthenticated users to the login page.
Display a message on the Home page welcoming the authenticated user.

5.Extend the application to include nested routes for a more complex user interface.
Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
Implement nested routing within this section using nested routes.
Add navigation links to switch between the sub-pages within the Dashboard section.
Customize the content displayed on each sub-page.

6.Create a list of items (e.g., products, articles) in your application.
Implement dynamic routing to display details for each item when clicked.
Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
Fetch item details based on the route parameter and display them on the detail page.
Add a "Go Back" button on the detail page to return to the list.

## Learning

1.Routing
2.Use of Link
3.Dynamic Routing
4.Nested Routing
5.UseParams hook

## Description

1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

3.Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

4.Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.

5.Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.

6.Build a simple todo list component with a text input for adding new tasks and a list to display them. Use controlled components to handle the input and update the list of tasks.

7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.

8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

9.Implement a responsive sidebar navigation using Material-UI's Drawer component. Include links that allow users to navigate between different sections of your web app.

10.Create a form with Material-UI text fields and implement form validation. Ensure that error messages are displayed when the user enters invalid data.

11.Design a modal dialog component using Material-UI's Dialog component. Use it to display additional information or capture user input within your app.

12.Build a data table using Material-UI's Table component. Populate the table with sample data and add features like sorting and pagination.

13.install Yup. Define a Yup validation schema for a more complex form. Include validation rules for fields like email, password, and phone number. Ensure that error messages are displayed for each validation rule.
Implement real-time validation feedback using Material-UI's TextField component. Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well)

14.Create a new form and Implement form submission handling. Ensure that the form cannot be submitted if there are validation errors. Display a summary of errors if the user attempts to submit an invalid form.

## Learning

1.How to use MUI - textfields,buttons,drawer
2.Form handling using Formik
3.Form validation using Yup

## Description

1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

2.Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

3.Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.

4.Fetch a large dataset from an API and implement pagination. Display a limited number of items per page and provide navigation controls to load more pages of data.

5.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.

6.Modify the previous assignment to implement error handling using Axios. Display an error message if the request fails and provide a way for the user to retry the request.

7.Create a form in your React component that allows the user to input data (e.g., a post title and content). Use Axios to send a POST request to an API endpoint, posting the user's data.

8.set up a GraphQL client library like Apollo Client. Create a simple component that uses the client to fetch and display data from a GraphQL API.

9.Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination for large datasets and display the data in a user-friendly way.

10.Extend the previous assignment to allow users to perform mutations, such as adding, updating, or deleting items. Implement a form and mutation queries to interact with the GraphQL API.

11.Demonstrate how to handle errors in GraphQL queries and mutations. Create a React component that displays error messages when GraphQL requests fail and provides a way for users to retry the request.

12.Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers. Demonstrate how to use this component in a sample application.

13.Design and implement a Modal component in React. Allow customization of the modal content and provide options to open, close, and toggle the modal. Use this component to display various types of content.

14.Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.

15.Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating). Apply this HOC to a component and display the logs in the browser console.

16.Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component. Use this HOC to retrieve and display data in a component.

## Learning

1.Fetch data from APIs
2.Fetch data from Axios
3.Error Handling in Axios
4.HOC

## Description

1.Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

2.Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.

3.Create a React component named Counter that displays a number and two buttons, one for incrementing the number and another for decrementing it. Write tests using React Testing Library to ensure that the component behaves as expected.

4.You are given a simple form component (LoginForm) that contains input fields for username and password, as well as a submit button. Create test cases to verify that the form fields can be filled, and the submit button works correctly.

5.Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.

6.Create a React component (Modal) that displays a modal dialog with content. Users can open and close the modal. Write tests to check if the modal opens and closes when triggered.

## Learning

1. Lazy Loading
2. Error Boundary
3. Testing

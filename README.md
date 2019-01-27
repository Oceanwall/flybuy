# flybuy

<h1 align="center">
  <br>
    <a href="">
      <img src="https://raw.githubusercontent.com/Oceanwall/flybuy/master/images/logo.png" alt="flybuy" width="200">
    </a>
</h1>

Electron app that enhances the American Airlines in-flight experience. Built at TAMUHack 2019.

## Features

- Ordering food and drink
- Viewing a floor plan of the airplane
- Seeing real time bathroom availability
- Calling a flight attendant
- Providing customer feedback

## Creators

flybuy was built by four UTCS students, Matthew Zhao, Aniket Joshi, Abhinav Kasamsetty, and Tiger Zhang.

## Inspiration

We wanted to significantly improve the in-flight experience for every American Airlines customer. We believe that the way food is served on airplanes has not changed in decades, so we wanted to change that by using the in-flight screen or a mobile app that every customer has access to during the flight. As customers, we wanted to know more information about the flights that we might embark upon, which led us to display real time flight information.

## What it does

flybuy has various features to improve the customer experience onboard a flight. The customer has the ability to order food and drink directly from their device, improving the flight crew's efficiency and speed at delivering the orders. Furthermore, they are able to view a floor plan of the airplane with information regarding the emergency exits and the current availability of the bathrooms. The customer can also easily call for a flight attendant from the home screen. Finally, they are able to provide relevant feedback about the quality of the entire flight experience.

## How we built it

We used a web front-end based on Electron to provide cross platform compatibility and a Node.js back-end utilizing the American Airlines Mock Engine data. For the front-end, we used HTML5, CSS3, and JavaScript along with the Materialize framework to create an intuitive user interface.

## Challenges we ran into

We initially faced a lot of difficulties integrating our back-end with the Electron application because Electron was an unfamiliar framework for all of us. Also, we spent a lot of time learning the details of HTML and CSS as we built out our front-end.

## Accomplishments that we're proud of

We enjoyed overcoming the various technical difficulties as we learned more about the Electron framework, HTML, CSS, and the Materialize framework. After gaining more experience with these, we were able to create a finished product that we're proud of.

## What we learned

We learned various technologies and frameworks, including the Electron framework, advanced HTML5 and CSS3 techniques, and the Materialize framework to adhere to Google Material Design principles. We also learned how to use Git in a team environment by handling issues such as merge conflicts.

## What's next for flybuy

We would like to scale our back-end to handle more users and optimize our database accesses. Also, we want to add a system for customers to change their seat during the flight.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/Oceanwall/flybuy
# Go into the repository
cd flybuy
# Install dependencies
npm install
# Run the app
npm start
```

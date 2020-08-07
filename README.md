# typescript-react

Essentially, when it comes to our app we are defining our the input of our document as the input.tsx. 
  - the input.tsx appends our App to the root element in our dom
  - We append our messenger app onto the main App
  - Our messenger sets a state of current messages and message archive
  - when we create a message, we emit it with our socket
    - and we add the message to the archive
  - We then display the message archive under the message application


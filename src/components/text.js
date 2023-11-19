import React, { useState } from 'react';

const Text = () => {
  const texto = `The Smelly Dog

  Once upon a time, there was a smelly dog named Stinky. He lived with his owner, John, in an apartment. John was a programmer and worked long hours.
  
  One day, John was working when Stinky got hungry. He saw Tom, the cat, eating his food. Stinky was so hungry that he decided to eat Tom's food.
  
  Stinky picked up a wooden fork and started to eat Tom's food. Tom saw Stinky and started to meow and growl. John heard the noise and came into the room.
  
  John was angry when he saw Stinky eating Tom's food. He picked up Stinky and took him outside. John left Stinky on the street to learn his lesson.
  
  Stinky was scared and alone. He didn't know what to do. He was hungry and cold.
  
  Suddenly, a boy named Alex walked by. Alex saw Stinky and asked him what was wrong. Stinky told Alex what had happened.
  
  Alex felt sorry for Stinky. He took Stinky home with him. Alex gave Stinky food and a place to sleep.
  
  Stinky was so happy to have a new friend. He promised Alex that he would never eat another animal's food again.
  
  Stinky and Alex became best friends. They played together every day. Stinky was no longer smelly because he had a friend who loved him.
  
  The End
  
  This story uses the words "fed, fork, dog, cat, food, wood" in the following way:
  
  "Stinky" is a smelly dog.
  "Wooden fork" is the object that Stinky uses to eat the cat's food.
  "Dog" is the species of animal that Stinky is.
  "Cat" is the species of animal that Tom is.
  "Food" is what Stinky is eating.
  "Wood" is the material of the fork that Stinky uses.
  I hope you like this story!
`;

  return (
    <div className="container">
       <h2 style={{ position: 'absolute', top: 0 }}>Text</h2>
      <div className="texto-gerado">
        {texto}
      </div>
    </div>
  );
};

export default Text;

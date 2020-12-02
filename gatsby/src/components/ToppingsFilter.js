import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function countPizzasInToppings(pizzas) {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is and existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        // if it is, increment by 1
        existingTopping.count += 1;
      }
      // otherwise create a new entry in our acc and set it to one
      acc[topping.id] = {
        id: topping.id,
        name: topping.name,
        count: 1,
      };
      return acc;
    }, {});
}

export default function ToppingsFilter() {
  // Get a list of all the toppings
  // Get a list of all the Pizzas with their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  // Count how many pizzas are in each topping
  const toppingWithCounts = countPizzasInToppings(pizzas.nodes);
  // Loop over the list of toppings and siplay the topping and the count of pizzas in that topping
  // Link it up...
  return (
    <div>
      <p>TOPPINGS!</p>
    </div>
  );
}

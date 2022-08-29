import React from 'react';

import './sidebar.css';

const Sidebar = () => {
  return (
    <nav>
        <h2>Filters Recipe</h2>
        <ul>
            <li>
                <ul>
                    <li><h3>Diet</h3></li>
                    <li><a href="#">Dairy Free</a></li>
                    <li><a href="#">Egg Free</a></li>
                    <li><a href="#">Sugar Free</a></li>
                    <li><a href="#">Gluten Free</a></li>
                </ul>
            </li>

            <li>
                <ul>
                    <li><h3>Allergies</h3></li>
                    <li><a href="#">Glutten</a></li>
                    <li><a href="#">Legumes</a></li>
                    <li><a href="#">Grain</a></li>
                    <li><a href="#">Fruite</a></li>
                </ul>
            </li>
                        
            <li>
                <ul>
                    <li><h3>Cuisine</h3></li>
                    <li><a href="#">Asian</a></li>
                    <li><a href="#">Italian</a></li>
                    <li><a href="#">Chinese</a></li>
                    <li><a href="#">French</a></li>
                </ul>
            </li>
        </ul>

    </nav>
  )
}

export default Sidebar
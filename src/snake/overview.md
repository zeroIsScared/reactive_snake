DRY

-OOP: inheritance, composition
- functional: coposition



Component(basic component with common features)
                     \
                   + -- class
                   + -- background
                   |
withCoordinates (component) -->(a wrapper that will add coordinates)
                   +coordinates
                   |
                   | 
            <div coordinates>
               <Component ... />
            </div>





SnakeHead
  
     + coordinate    (comon)
     + background    (comon)

     + direction     (specific)
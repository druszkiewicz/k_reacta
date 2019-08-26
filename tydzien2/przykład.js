const App = 
        React.createElement(
            "div",
            { className: "App"}, 
           React.createElement(
               "h1",
               {},
               "Kurs Reacta - Tydzień 2"
           ),
           React.createElement(
               "hr"
           ),
           React.createElement(
               "div", {
                   className : "TimeboxEditor inactive",
               }, 
               React.createElement(
                   "label",
                   {}, "Co robisz?",
                   React.createElement(
                       "input",
                       {
                       disabled: true,
                       value: "Ucze sie skrótów klawiszowych"},
                   ),
               ),
               React.createElement(
                        "br"
               ),
               React.createElement(
                   "label",
                   {}, "Ile minut?",
                   React.createElement(
                       "input",
                       {
                       disabled: true,
                       value: "25"},
                   )
               )
           ),
           React.createElement(
               "div",
               {className: "Timebox"},
               React.createElement(
                   "h1",
                   {},
                   "Ucze sie skrótów klawiszowych"
               ),
               React.createElement(
                   "h2", 
                   {className : "Clock"},
                   "Pozostało 18:57"
               ),
               React.createElement(
                   "div",
                   {className : "ProgressBar"},
                   React.createElement(
                       "div",
                       {style: {
                           width: "28%"
                       }}
                   )
               ),
               React.createElement(
                   "button",
                   {
                       disabled: true
                   },
                   "Start"
               ),
               React.createElement(
                   "button",
                   {},
                   "Stop"
               ),
               React.createElement(
                   "button", 
                   {},
                   "Pauzuj"
               ),
               React.createElement(
                   "i",
                   {},
                   " Liczba przerw: 2"
               )
           )
        )
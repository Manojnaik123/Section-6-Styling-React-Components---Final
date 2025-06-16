

const str = `105. Module Introduction & Starting Project
4min
Play
106. Splitting CSS Code Across Multiple Files
3min
Play
107. Styling React Apps with Vanilla CSS - Pros & Cons
3min
Play
108. Vanilla CSS Styles Are NOT Scoped To Components!
4min
Play
109. Styling React Apps with Inline Styles
6min
Play
110. Dynamic & Conditional Inline Styles
3min
Start
Coding Exercise 17: Dynamic Styling with Inline Styles
Play
111. Dynamic & Conditional Styling with CSS Files & CSS Classes
6min
Start
Coding Exercise 18: Dynamic Styling with CSS Classes
Play
112. Scoping CSS Rules with CSS Modules
10min
Play
113. Introducing "Styled Components" (Third-party Package)
8min
Play
114. Creating Flexible Components with Styled Components
5min
Play
115. Dynamic & Conditional Styling with Styled Components
11min
Play
116. Styled Components: Pseudo Selectors, Nested Rules & Media Queries
7min
Play
117. Creating Reusable Components & Component Combinations
10min
Play
118. Introducing Tailwind CSS For React App Styling
11min
Start
119. Tailwind 3 vs 4
1min
Play
120. Adding & Using Tailwind CSS In A React Project
4min
Play
121. Tailwind: Media Queries & Pseudo Selectors
5min
Play
122. Dynamic & Conditional Styling with Tailwind
6min
Play
123. Migrating The Demo App to Tailwind CSS
4min
Play
124. Tailwind CSS: Pros & Cons
4min
Start
Coding Exercise 19: Exercise: Dynamic Styles`

const c = str.split('\n');

const t = c.filter(item => (!item.includes('Start')));
const t1 = t.filter(item => (!item.includes('min')))
const t2 = t1.filter(item => (!item.includes('Play')))
const t3 = t2.filter(item => (!item.includes('Exercise')))

const y = t3.map(item => "<h1>" + item + "</h1>")

// console.log(y);

console.log(y.length);


export default y;

<svelte:head>
  <style>
   @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  </style>
</svelte:head>

<slot></slot>

<style>
  :global(:root){
    --stroke: #6C7A89; /* Font color */
    --fill: #F0F4F8; /* Background color */
    --accent1: #BDC3C7; /* Main color */
    --accent2: #2C3E50; /* Higlights color */
    --mainfont: "Poppins", sans-serif;

    --headerfont: "Baskerville", sans-serif;

    font-family: var(--mainfont);
  }

  :global(body) {
    padding: 0px;
    margin: 0px;
    background: var(--fill);
    color: var(--stroke);
  }

  :global(button, select, input) {
    font-family: var(--mainfont);
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--headerfont);
    color: var(--accent2);
  }

  :global(h1) {
    font-size: 2em;
  }

  :global(p, li) {
    font-size: 1.1em;
  }

  :global(table) {
    border-collapse: collapse;
    max-width: 100%;
  }

  :global(a) {
    color: var(--accent2); 
  }

  :global(.silent-link) {
    text-decoration: none;
    font-weight: bold;
    color: var(--stroke); 
  }

  :global(.default-button) {
    padding: 0.5em;
    margin: 0.5em 0;
    border: solid 1px var(--accent2);
    color: var(--fill);
    font-size: 1em;
    background: var(--accent2);
    cursor: pointer;
  }

  :global(.default-button:hover) {
    color: var(--accent2);
    background: var(--fill);
  }

  :global(.default-button:active) {
    background: var(--accent1);
  }

  :global(th, td) {
    border: 1px solid rgba(0,0,0,0.2);
    padding: 0.5em;
    text-align: left;
  }

  :global(.silent-link:hover) {
    color: var(--accent2);
  }

  :global(.no-select)  {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :global(.noevents) {
    pointer-events: none;
  }

  :global(.reset-button) {
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    border: none;
    background: none;
  }

  :global(.reset-button:active) {
    filter: invert(1);
  }

  :global(.reset-button:hover) {
    filter: invert(0.5);
  }

  :global(.reset-button img) {
    height: 1.2rem;
  }
</style>
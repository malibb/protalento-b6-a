# React

Libreria para construir interfaces en Javascript.

Al ser una librería nos permite usarlo a cachitos o completo en nuestro sitio.

Dentro de las ventajas tenemos:

- Se construye más rápido.
- Utiliza el concepto de componente.
- La inmutabilidad (tiene un virtual DOM por lo que el DOM real está estático).

Lo podemos por lo tanto ocupar solo:

- CDN
- Utilizar algún conjunto de comandos.

Lo podriamos utilizar con un framework.

- Next.JS
- Gatsby
- Vite
- Remix

# Cómo se compone REACT

React utiliza JSX para poder desarrollar de manera óptima nuestras aplicaciones.
En este caso, debemos cerrar siempre todas las etiquetas o REACT no reflejará los cambios.


Las aplicaciones React están hechas de componentes. 

Un componente es una parte de la UI (interfaz de usuario) que tiene su propia lógica y apariencia. 

# Componentes

Para crear un componente en React debemos de crear un función que retorne  JSX (código que pueden ser más componentes de react o etiquetas que ya conociamos en HTML)

```JS
function Componente() {
  return (
    <div>
      Soy un etiqueta
    </div>
  );
}
```

Un componente siempre inicia con mayúscula.

Al crear un componente principal debemos ocupar las palabras `export default`;

```JS

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


```

Existen dos tipos de componentes:

### Componentes tontos:

No tienen lógica. Sólo tienen afección en código visual.
```JS
function Componente() {
  return (
    <div>
      Soy un etiqueta
    </div>
  );
}
```
### Componentes funcionales

Van a poder recibir información y procesarla. 

```JS
// Enviar un valor al componente puede pasarlo por su propiedad, el equivalente a un atributo.
function Componente({nombre}) {
  return (
    <div>
      Soy un etiqueta, {nombre}
    </div>
  );
}
```

Para mostrar datos o pasar datos entre componentes usaremos las llaves `{}`.


## Lenguaje

### IF

React es JS, usa las estructuras de control como en JS.
Eso implica el operador `IF`
Pero hay ventajas en usar otras maneras de escribir la condicional como:

```JS
// esto lo podemos retornar direcamente como un componente.
<div>
    <h1>Hola</h1>
    {condicion ? (<Componente1 />) : (<Componente2 />)}
</div>

```

O si solo es una opción 

```JS
// esto lo podemos retornar direcamente como un componente.
{condicion && <Componente1 />}

```

### Listas

```JS

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

```

Podemos usar un for para crear muchos títulos.

```JS

function MyFuncionParaDevolverLista({lista}) {

  const lista = [];

  for (let i = 0, i<lista; i++){
    lista.push(<li key={lista[i].id}>
    {lista[i].title}
  </li>);
  }
  return lista;
}

```

Para mostrar la lista:

```JS
// esto lo podemos retornar direcamente como un componente.
<div>
    <h1>Hola</h1>
    <ul>
        <MyFuncionParaDevolverLista lista="lista" />
    </ul>
</div>

```

```JS
// esto lo podemos retornar direcamente como un componente.
<div>
    <h1>Hola</h1>
    <ul>
        {products.map((product) =>  <li key={product.id}>{product.title}</li>)}
    </ul>
</div>

```

### Eventos

Si yo quiero usar los eventos en JS lo puedo hacer y puedo crear los mios de la misma forma.

Con funciones.

```JS
function MyButton() {
  function manejoDelClick() {
    alert('You clicked me!');
  }

  return (
    // los mismos eventos que usabamos ahora están en nomenclatura camelCase
    <button onClick={manejoDelClick}>
      Click me
    </button>
  );
}

//ocupo cuando 

<MyButton/>

// esto ya me va a mostrar el componente
```

## Variables vs State (estado)

Las variables acá no nos van a ayudar con los cambios que tengamos en la página de forma visual.


### Estado > State

React te permite trabajar información que cambie mientras se use la página por medio de un hook que es una función que nos permite obtener en la primer posición el estado actual (state) y en la segunda la función que te permite actualizarlo (setState).

Esta función usa destructuración por lo que tú le puedes poner el nombre que necesites según tu componente.

```JS

const compraHelado = ['g', 'sandia', 200];

const sabor = compraHelado[1];

const [,sabor] = compraHelado;

console.log(sabor);

```

Aquí podemos ver como se usa para el hook de useState;

```JS

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


```
Al crear el estado, siempre se manda como parámetro el valor inicial.

useState: el estado actual (count) y la función que te permite actualizarlo ( setCount).

Podriamos mandar información entre componentes.

```JS

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton inicio="1" />
      <MyButton inicio={1 + 4} />
    </div>
  );
}

function MyButton({ inicio }) {
  const [count, setCount] = useState(inicio);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


```
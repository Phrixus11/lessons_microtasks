


// 2. с помощью обертки в memo()


export const SlowComponent = () => {
  console.log('SlowComponent повторный рендеринг...');

  const now = performance.now();

  // // с помощью useEffect с пустым массивом зависимостей
  // useEffect(() => {
  //   while (performance.now() - now < 1000) {
  //     // Искусственная задержка - ничего не делает в течение 100 мс
  //   }
  // }, []);

  // можно с помощью useMemo


    while (performance.now() - now < 1000) {
      // Искусственная задержка - ничего не делает в течение 100 мс
    }

  return <p>Я очень медленное дерево компонентов.</p>;
}


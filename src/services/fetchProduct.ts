export const fetchProducts = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products?limit=20').then((res) => res.json());
      } catch (error) {
    }
  }
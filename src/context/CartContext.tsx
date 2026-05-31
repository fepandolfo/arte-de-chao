import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { products } from "../data/products";
import type { Product } from "../data/products";

export type CartItem = { productId: string; size: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (productId: string, size: string) => void;
  remove: (productId: string, size: string) => void;
  setQty: (productId: string, size: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (b: boolean) => void;
  count: number;
  subtotal: number;
  detailed: (CartItem & { product: Product })[];
};

const Ctx = createContext<CartCtx | undefined>(undefined);
const KEY = "artedechao.cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const add = (productId: string, size: string) => {
    setItems((prev) => {
      const found = prev.find((i) => i.productId === productId && i.size === size);
      if (found) return prev.map((i) => (i === found ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { productId, size, qty: 1 }];
    });
    setOpen(true);
  };

  const remove = (productId: string, size: string) =>
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.size === size)));

  const setQty = (productId: string, size: string, qty: number) =>
    setItems((prev) =>
      prev
        .map((i) => (i.productId === productId && i.size === size ? { ...i, qty } : i))
        .filter((i) => i.qty > 0)
    );

  const clear = () => setItems([]);

  const detailed = useMemo(
    () =>
      items
        .map((i) => {
          const product = products.find((p) => p.id === i.productId)!;
          return product ? { ...i, product } : null;
        })
        .filter(Boolean) as (CartItem & { product: Product })[],
    [items]
  );

  const count = detailed.reduce((n, i) => n + i.qty, 0);
  const subtotal = detailed.reduce((n, i) => n + i.qty * i.product.price, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, setQty, clear, open, setOpen, count, subtotal, detailed }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("CartProvider missing");
  return v;
};
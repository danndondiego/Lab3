interface Item {
    name: string;
    price: number;
    quantity: number;
  }
  
  interface PaymentProcessor {
    processPayment(amount: number): void;
  }
  
  interface Discount {
    applyDiscount(amount: number): number;
  }
  
  class ShoppingCart<T> {
    private items: T[] = [];
  
    // Single Responsibility Principle: This class is only responsible for managing items in the cart.
    addItem(item: T): void {
      this.items.push(item);
    }

    getItems(): T[] {
      return this.items;
    }
  }
  
  class Checkout {
    constructor(
      private cart: ShoppingCart<Item>,
      private paymentProcessor: PaymentProcessor,
      private discount?: Discount // Dependency Inversion: Allows flexibility in applying discounts
    ) {}
  
    // Single Responsibility Principle: This class is only responsible for processing the checkout.
    process(): void {
      let total = this.calculateTotal(this.cart.getItems());
      if (this.discount) {
        total = this.discount.applyDiscount(total);
      }
      this.paymentProcessor.processPayment(total);
    }

    private calculateTotal(items: Item[]): number {
        return items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      }
  }
  
  class ConsolePaymentProcessor implements PaymentProcessor {
    // Single Responsibility Principle: This class is only responsible for processing payments.
    processPayment(amount: number): void {
      console.log("Processing payment for total:", amount);
    }
  }
  
  // Open/Closed Principle: New functionality (discounts) can be added without modifying existing code.
  class PercentageDiscount implements Discount {
    constructor(private percentage: number) {}
  
    applyDiscount(amount: number): number {
      return amount - (amount * this.percentage) / 100;
    }
  }
  
  // Usage example
  const cart = new ShoppingCart<Item>();
  cart.addItem({ name: "Apple", price: 1, quantity: 3 });
  cart.addItem({ name: "Banana", price: 2, quantity: 2 });
  
  const paymentProcessor = new ConsolePaymentProcessor();
  const discount = new PercentageDiscount(10); // 10% discount
  const checkout = new Checkout(cart, paymentProcessor, discount);
  checkout.process();
import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {

    if (this.count ()> 0) {
      this.count.set(this.count() - 1);
    }
  }

}

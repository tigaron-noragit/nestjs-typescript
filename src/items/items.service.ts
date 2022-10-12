import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Set<Item> = new Set();

  findAll(): Item[] {
    return Array.from(this.items);
  }

  create(item: Item) {
    this.items.add(item);
    return Array.from(this.items);
  }
}

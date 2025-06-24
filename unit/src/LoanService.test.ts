import { describe, test, expect, beforeEach } from 'vitest';
import { Book } from './Book';
import { LoanService } from './LoanService';
import { User } from './User';

let service: LoanService;
let book: Book;
let user: User;

beforeEach(() => {
  service = new LoanService();
  book = new Book('book1', '1984', 'George Orwell');
  user = new User('user1', 'Alice', 'alice@example.com', 'standard');
});

test('ajoute et récupère un livre', () => {
  service.addBook(book);
  expect(service.getBook('book1')).toBe(book);
});

test('ajoute et retourne un utilisateur', () => {
  service.addUser(user);
  expect(service.getUser('user1')).toBe(user);
});

test('emprunt réussi quand le livre est dispo et le user peut emprunter', () => {
  service.addBook(book);
  service.addUser(user);

  const result = service.borrowBook('book1', 'user1');
  expect(result).toBe(true);
  expect(book.status).toBe('borrowed');
  expect(book.borrowedBy).toBe('user1');
  expect(user.currentLoans).toContain('book1');
});

test("échec si le livre n'existe pas", () => {
  service.addUser(user);

  const result = service.borrowBook('b999', 'user1');
  expect(result).toBe(false);
});

test("échec si l'utilisateur n'existe pas", () => {
  service.addBook(book);

  const result = service.borrowBook('book1', 'u999');
  expect(result).toBe(false);
});

test("échec si le livre est déjà emprunté", () => {
  service.addBook(book);
  service.addUser(user);

  service.borrowBook('book1', 'user1');

  const user2 = new User('user2', 'Bob', 'bob@example.com');
  service.addUser(user2);

  const result = service.borrowBook('book1', 'user2');
  expect(result).toBe(false);
});

test("échec si l'utilisateur a atteint sa limite de prêts", () => {
  const book2 = new Book('book2', 'Autre Livre', 'Auteur');
  const book3 = new Book('book3', 'Encore un', 'Auteur');
  const book4 = new Book('book4', 'Trop tard', 'Auteur');

  service.addUser(user);
  service.addBook(book);
  service.addBook(book2);
  service.addBook(book3);
  service.addBook(book4);

  service.borrowBook('book1', 'user1');
  service.borrowBook('book2', 'user1');
  service.borrowBook('book3', 'user1');

  const result = service.borrowBook('book4', 'user1');
  expect(result).toBe(false);
});

test("calcule la date de retour pour un utilisateur de type standard", () => {
  const borrowDate = new Date("2025-06-24");
  const expectedReturnDate = new Date("2025-07-08");

  const dueDate = service.calculateDueDate(borrowDate, "standard");
  expect(dueDate.toDateString()).toBe(expectedReturnDate.toDateString());
});

test("calcule la pénalité en cas de retour en retard", () => {
  book.borrowDate = new Date("2025-06-01");
  book.dueDate = new Date("2025-06-15");
  const returnDate = new Date("2025-06-20");

  const penalty = service.calculatePenalty(book, returnDate);
  expect(penalty).toBe(2.5); 
});

test("renvoie uniquement les livres empruntés", () => {
  const book2 = new Book("book2", "Titre 2", "Auteur 2");

  service.addBook(book);
  service.addBook(book2);
  service.addUser(user);

  service.borrowBook("book1", "user1");

  const borrowed = service.getBorrowedBooks();
  expect(borrowed).toHaveLength(1);
  expect(borrowed[0].id).toBe("book1");
});

test("renvoie uniquement les livres disponibles", () => {
  const book2 = new Book("book2", "Titre 2", "Auteur 2");

  service.addBook(book);
  service.addBook(book2);
  service.addUser(user);

  service.borrowBook("book1", "user1");

  const available = service.getAvailableBooks();
  expect(available).toHaveLength(1);
  expect(available[0].id).toBe("book2");
});
export class SpoonacularError extends Error {
  private status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  getStatus() {
    return this.status;
  }
}

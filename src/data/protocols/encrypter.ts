/* eslint-disable @typescript-eslint/method-signature-style */
export interface Encrypter {
  encrypt (value: string): Promise<string>
}

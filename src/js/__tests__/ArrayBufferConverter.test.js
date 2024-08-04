import { ArrayBufferConverter } from "../ArrayBufferConverte";
import { getBuffer } from "../getBuffer";

describe('ArrayBufferConverter', () => {
    test('should load and convert ArrayBuffer to string', () => {
        const buffer = getBuffer();
        const converter = new ArrayBufferConverter();
        converter.load(buffer);

        const result = converter.toString();
        const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

        expect(result).toBe(expected);
    });

    test('should handle empty ArrayBuffer', () => {
        const buffer = new ArrayBuffer(0);
        const converter = new ArrayBufferConverter();
        converter.load(buffer);

        const result = converter.toString();
        const expected = '';

        expect(result).toBe(expected);
    });
});
declare module 'customLibrary' {
    declare type ElementEventTemplate<E> = {
        target: E,
        currentTarget: E
      } & Event;
    declare type InputEvent = ElementEventTemplate<HTMLInputElement>;
  }

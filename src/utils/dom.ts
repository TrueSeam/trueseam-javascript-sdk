import { Mountable } from "../types/Mountable";
import { DelayableAnimatableElement } from "../types/DelayableAnimatableElement";
import { BaseElement } from "../types/BaseElement";

export function styleElement(
  el: HTMLElement,
  style: Partial<CSSStyleDeclaration>
) {
  Object.assign(el.style, style);
}

export function createContainer(): Mountable {
  const container = document.createElement("div");
  container.id = "cozyhome-container";
  styleElement(container, {
    position: "fixed",
    inset: "0",
    zIndex: "2147483647",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return new BaseElement({ element: container });
}

export function createBackdrop(): Mountable {
  const backdrop = document.createElement("div");
  backdrop.id = "cozyhome-backdrop";
  styleElement(backdrop, {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    zIndex: "0",
  });
  return new BaseElement({ element: backdrop });
}

export function createFrame(): Mountable {
  const mockIframe = document.createElement("div");
  mockIframe.id = "cozyhome-frame";
  styleElement(mockIframe, {
    width: "800px",
    height: "600px",
    background: "black",
    zIndex: "1",
    borderRadius: "12px",
  });
  return new DelayableAnimatableElement({
    element: mockIframe,
    animationDefinition: {
      keyFrames: [
        { transform: "rotate(0) scale(1)" },
        { transform: "rotate(360deg) scale(0)" },
      ],
    },
  });
}

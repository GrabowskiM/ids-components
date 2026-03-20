"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AltRadioInput: () => AltRadioInput,
  AltRadioInputStateful: () => AltRadioInputStateful,
  AssetsContext: () => AssetsContext,
  AssetsProvider: () => AssetsProvider,
  Autosave: () => Autosave,
  AutosaveStatus: () => AutosaveStatus,
  BASE_INPUT_TYPE_VALUES: () => BASE_INPUT_TYPE_VALUES,
  Badge: () => Badge,
  BadgeSize: () => BadgeSize,
  BadgeVariant: () => BadgeVariant,
  BaseChoiceInput: () => BaseChoiceInput,
  BaseChoiceInputField: () => BaseChoiceInputField,
  BaseDropdown: () => BaseDropdown,
  BaseField: () => BaseField,
  BaseInput: () => BaseInput,
  BaseInputsList: () => BaseInputsList,
  Button: () => Button,
  ButtonSize: () => ButtonSize,
  ButtonType: () => ButtonType,
  CheckboxField: () => CheckboxField,
  CheckboxFieldStateful: () => CheckboxFieldStateful,
  CheckboxInput: () => CheckboxInput,
  CheckboxInputStateful: () => CheckboxInputStateful,
  CheckboxesListField: () => CheckboxesListField,
  CheckboxesListFieldAction: () => CheckboxesListFieldAction,
  CheckboxesListFieldDirection: () => Direction,
  CheckboxesListFieldStateful: () => CheckboxesListFieldStateful,
  ChoiceInputLabel: () => ChoiceInputLabel,
  Direction: () => Direction,
  DropdownMultiInput: () => DropdownMultiInput,
  DropdownMultiInputAction: () => DropdownMultiInputAction,
  DropdownMultiInputStateful: () => DropdownMultiInputStateful,
  DropdownSingleInput: () => DropdownSingleInput,
  DropdownSingleInputStateful: () => DropdownSingleInputStateful,
  Expander: () => Expander,
  ExpanderType: () => ExpanderType,
  HelperText: () => HelperText,
  HelperTextType: () => HelperTextType,
  INPUT_CHOICE_TYPE_VALUES: () => INPUT_CHOICE_TYPE_VALUES,
  INPUT_TEXT_TYPE_VALUES: () => INPUT_TEXT_TYPE_VALUES,
  Icon: () => Icon,
  IconSize: () => IconSize,
  InputTextField: () => InputTextField,
  InputTextFieldSize: () => InputTextInputSize,
  InputTextFieldStateful: () => InputTextFieldStateful,
  InputTextInput: () => InputTextInput,
  InputTextInputSize: () => InputTextInputSize,
  InputTextInputStateful: () => InputTextInputStateful,
  Label: () => Label,
  RadioButtonField: () => RadioButtonField,
  RadioButtonFieldStateful: () => RadioButtonFieldStateful,
  RadioButtonInput: () => RadioButtonInput,
  RadioButtonInputStateful: () => RadioButtonInputStateful,
  RadioButtonsListField: () => RadioButtonsListField,
  RadioButtonsListFieldDirection: () => Direction,
  RadioButtonsListFieldStateful: () => RadioButtonsListFieldStateful,
  Tag: () => Tag,
  TagGhostType: () => TagGhostType,
  TagSize: () => TagSize,
  TagType: () => TagType,
  ToggleButtonField: () => ToggleButtonField,
  ToggleButtonFieldSize: () => ToggleButtonInputSize,
  ToggleButtonFieldStateful: () => ToggleButtonFieldStateful,
  ToggleButtonInput: () => ToggleButtonInput,
  ToggleButtonInputSize: () => ToggleButtonInputSize,
  ToggleButtonInputStateful: () => ToggleButtonInputStateful,
  TranslatorContext: () => TranslatorContext,
  TranslatorProvider: () => TranslatorProvider,
  useGetOrCreateId: () => useGetOrCreateId,
  useKeyDown: () => useKeyDown,
  validateInput: () => validateInput,
  withStateChecked: () => withStateChecked,
  withStateValue: () => withStateValue
});
module.exports = __toCommonJS(index_exports);

// src/components/Accordion/Accordion.tsx
var import_react6 = __toESM(require("react"));

// src/components/Expander/Expander.tsx
var import_react4 = __toESM(require("react"));

// src/components/Button/Button.tsx
var import_react3 = __toESM(require("react"));

// src/components/Icon/Icon.tsx
var import_react2 = __toESM(require("react"));

// src/context/Assets/Assets.tsx
var import_react = __toESM(require("react"));
var AssetsContext = (0, import_react.createContext)({
  getIconPath: () => ""
});
var AssetsProvider = ({ children, value }) => {
  return /* @__PURE__ */ import_react.default.createElement(AssetsContext.Provider, { value }, children);
};

// src/components/Icon/Icon.tsx
var import_ids_core = require("@ibexa/ids-core");

// src/components/Icon/Icon.types.ts
var IconSize = /* @__PURE__ */ ((IconSize2) => {
  IconSize2["Tiny"] = "tiny";
  IconSize2["TinySmall"] = "tiny-small";
  IconSize2["Small"] = "small";
  IconSize2["SmallMedium"] = "small-medium";
  IconSize2["Medium"] = "medium";
  IconSize2["MediumLarge"] = "medium-large";
  IconSize2["Large"] = "large";
  IconSize2["LargeHuge"] = "large-huge";
  IconSize2["Huge"] = "huge";
  return IconSize2;
})(IconSize || {});

// src/components/Icon/Icon.tsx
var Icon = ({ path, className = "", name = "", size = "small" /* Small */ }) => {
  const { getIconPath } = (0, import_react2.useContext)(AssetsContext);
  const iconPath = path ?? getIconPath(name);
  const componentClassName = (0, import_ids_core.createCssClassNames)({
    "ids-icon": true,
    [`ids-icon--${size}`]: true,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react2.default.createElement("svg", { "aria-label": name, className: componentClassName, role: "img" }, /* @__PURE__ */ import_react2.default.createElement("use", { xlinkHref: iconPath }));
};

// src/components/Button/Button.tsx
var import_ids_core2 = require("@ibexa/ids-core");

// src/components/Button/Button.types.ts
var ButtonSize = /* @__PURE__ */ ((ButtonSize2) => {
  ButtonSize2["Medium"] = "medium";
  ButtonSize2["Small"] = "small";
  return ButtonSize2;
})(ButtonSize || {});
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["Primary"] = "primary";
  ButtonType2["Secondary"] = "secondary";
  ButtonType2["Tertiary"] = "tertiary";
  ButtonType2["SecondaryAlt"] = "secondary-alt";
  ButtonType2["TertiaryAlt"] = "tertiary-alt";
  return ButtonType2;
})(ButtonType || {});

// src/components/Button/Button.tsx
var ICON_SIZE_MAPPING = {
  ["medium" /* Medium */]: "small" /* Small */,
  ["small" /* Small */]: "tiny-small" /* TinySmall */
};
var Button = ({
  onClick,
  children = null,
  ariaLabel,
  disabled = false,
  extraAria = {},
  className = "",
  icon,
  isFocusable = true,
  size = "medium" /* Medium */,
  title = "",
  type = "primary" /* Primary */
}) => {
  const iconOnly = !!icon && !children;
  const componentClassName = (0, import_ids_core2.createCssClassNames)({
    "ids-btn": true,
    [`ids-btn--${type}`]: true,
    [`ids-btn--${size}`]: true,
    "ids-btn--disabled": disabled,
    "ids-btn--icon-only": iconOnly,
    [className]: !!className
  });
  const getBtnAriaLabel = () => {
    if (ariaLabel) {
      return ariaLabel;
    } else if (iconOnly) {
      return icon;
    }
    return typeof children === "string" ? children : "";
  };
  const renderIcon = () => {
    if (icon) {
      const iconSize = ICON_SIZE_MAPPING[size];
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "ids-btn__icon" }, /* @__PURE__ */ import_react3.default.createElement(Icon, { name: icon, size: iconSize }));
    }
    return null;
  };
  const renderLabel = () => {
    if (!iconOnly) {
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "ids-btn__label" }, children);
    }
    return null;
  };
  return /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      "aria-disabled": disabled,
      "aria-label": getBtnAriaLabel(),
      className: componentClassName,
      disabled,
      onClick,
      role: "button",
      tabIndex: isFocusable && !disabled ? 0 : -1,
      title,
      type: "button",
      ...extraAria
    },
    renderIcon(),
    renderLabel()
  );
};

// src/components/Expander/Expander.tsx
var import_ids_core3 = require("@ibexa/ids-core");

// src/components/Expander/Expander.types.ts
var ExpanderType = /* @__PURE__ */ ((ExpanderType2) => {
  ExpanderType2["Caret"] = "caret";
  ExpanderType2["Chevron"] = "chevron";
  return ExpanderType2;
})(ExpanderType || {});

// src/components/Expander/Expander.tsx
var ICONS_MAP = {
  ["caret" /* Caret */]: "arrow-caret-down",
  ["chevron" /* Chevron */]: "arrow-chevron-down"
};
var Expander = ({
  onClick = () => void 0,
  type,
  collapseLabel = "",
  expandLabel = "",
  hasIcon = true,
  isExpanded = false,
  isFocusable = true
}) => {
  const label = isExpanded ? collapseLabel : expandLabel;
  const componentClassName = (0, import_ids_core3.createCssClassNames)({
    "ids-expander": true,
    "ids-expander--has-icon": hasIcon,
    "ids-expander--has-label": label !== "",
    "ids-expander--is-expanded": isExpanded
  });
  const extraAria = {
    "aria-expanded": isExpanded
  };
  const renderExpanderIcon = () => {
    if (!hasIcon) {
      return null;
    }
    return /* @__PURE__ */ import_react4.default.createElement(Icon, { name: ICONS_MAP[type], size: "small" /* Small */ });
  };
  return /* @__PURE__ */ import_react4.default.createElement(
    Button,
    {
      ariaLabel: label,
      className: componentClassName,
      extraAria,
      isFocusable,
      onClick: () => {
        onClick(!isExpanded);
      },
      size: "small" /* Small */,
      type: "tertiary-alt" /* TertiaryAlt */
    },
    label,
    renderExpanderIcon()
  );
};

// src/context/Translator/Translator.tsx
var import_react5 = __toESM(require("react"));
var TranslatorContext = (0, import_react5.createContext)({
  trans: () => ""
});
var TranslatorProvider = ({ children, value }) => {
  return /* @__PURE__ */ import_react5.default.createElement(TranslatorContext.Provider, { value }, children);
};

// src/components/Accordion/Accordion.tsx
var import_ids_core4 = require("@ibexa/ids-core");
var FAKE_TIMEOUT_RERENDER = 1;
var Accordion = ({ children, header, initiallyExpanded = false, onHandleExpand = () => void 0 }) => {
  const Translator = (0, import_react6.useContext)(TranslatorContext);
  const accordionContentRef = (0, import_react6.useRef)(null);
  const [isExpanded, setIsExpanded] = (0, import_react6.useState)(initiallyExpanded);
  const [isAnimating, setIsAnimating] = (0, import_react6.useState)(false);
  const collapseLabel = Translator.trans(
    /*@Desc("Hide")*/
    "ibexa.expander.label.collapse"
  );
  const expandLabel = Translator.trans(
    /*@Desc("Show")*/
    "ibexa.expander.label.expand"
  );
  const changeExpanded = (nextIsExpanded) => {
    setIsExpanded(nextIsExpanded);
    onHandleExpand(nextIsExpanded);
    setIsAnimating(true);
    if (accordionContentRef.current) {
      const initialHeight = nextIsExpanded ? 0 : accordionContentRef.current.offsetHeight;
      accordionContentRef.current.style.height = `${initialHeight}px`;
      accordionContentRef.current.addEventListener(
        "transitionend",
        () => {
          setIsAnimating(false);
          if (accordionContentRef.current) {
            accordionContentRef.current.style.removeProperty("height");
          }
        },
        { once: true }
      );
    }
    setTimeout(() => {
      if (accordionContentRef.current) {
        const finalHeight = nextIsExpanded ? accordionContentRef.current.scrollHeight : 0;
        accordionContentRef.current.style.height = `${finalHeight}px`;
      }
    }, FAKE_TIMEOUT_RERENDER);
  };
  const mainClassName = (0, import_ids_core4.createCssClassNames)({
    "ids-accordion": true,
    "ids-accordion--is-animating": isAnimating,
    "ids-accordion--is-expanded": isExpanded
  });
  (0, import_react6.useEffect)(() => {
    setIsExpanded(initiallyExpanded);
  }, [initiallyExpanded]);
  return /* @__PURE__ */ import_react6.default.createElement("div", { className: mainClassName }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "ids-accordion__header" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "ids-accordion__header-content" }, header), /* @__PURE__ */ import_react6.default.createElement(
    Expander,
    {
      collapseLabel,
      expandLabel,
      hasIcon: true,
      isExpanded,
      onClick: changeExpanded,
      type: "caret" /* Caret */
    }
  )), /* @__PURE__ */ import_react6.default.createElement("div", { className: "ids-accordion__content", ref: accordionContentRef }, isExpanded || isAnimating ? children : null));
};

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
var import_react11 = __toESM(require("react"));

// src/partials/BaseChoiceInput/BaseChoiceInput.tsx
var import_react9 = __toESM(require("react"));

// src/partials/BaseInput/BaseInput.tsx
var import_react8 = __toESM(require("react"));
var import_ids_core5 = require("@ibexa/ids-core");

// src/hooks/generators.ts
var import_react7 = require("react");
var useGetOrCreateId = (id) => {
  const generatedId = (0, import_react7.useId)();
  return id ?? generatedId;
};

// src/partials/BaseInput/BaseInput.tsx
var BaseInput = ({
  name,
  disabled = false,
  error = false,
  className = "",
  extraInputAttrs = {},
  id,
  ref,
  required = false,
  size = "medium",
  title = "",
  type = "text",
  value = ""
}) => {
  const componentId = useGetOrCreateId(id);
  const componentClassName = (0, import_ids_core5.createCssClassNames)({
    "ids-input": true,
    [`ids-input--${type}`]: true,
    [`ids-input--${size}`]: true,
    "ids-input--disabled": disabled,
    "ids-input--error": error,
    "ids-input--required": required,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react8.default.createElement(
    "input",
    {
      "aria-invalid": error,
      "aria-required": required,
      className: componentClassName,
      disabled,
      id: componentId,
      name,
      ref,
      title,
      type,
      value,
      ...extraInputAttrs
    }
  );
};

// src/partials/BaseInput/BaseInput.types.ts
var BASE_INPUT_TYPE_VALUES = [
  "text",
  "password",
  "email",
  "number",
  "tel",
  "search",
  "url",
  "checkbox",
  "radio",
  "hidden"
];

// src/partials/BaseChoiceInput/BaseChoiceInput.tsx
var import_ids_core6 = require("@ibexa/ids-core");
var BaseChoiceInput = ({
  name,
  type,
  onBlur = () => void 0,
  onChange = () => void 0,
  onFocus = () => void 0,
  onInput = () => void 0,
  checked = false,
  className = "",
  disabled = false,
  error = false,
  extraAria = {},
  id,
  inputClassName = "",
  ref,
  title = "",
  value = ""
}) => {
  const componentClassName = (0, import_ids_core6.createCssClassNames)({
    "ids-choice-input": true,
    [className]: !!className
  });
  const componentOnBlur = (event) => {
    onBlur(event);
  };
  const componentOnChange = (event) => {
    onChange(event.target.checked, event);
  };
  const componentOnFocus = (event) => {
    onFocus(event);
  };
  const componentOnInput = (event) => {
    onInput(event);
  };
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: componentClassName }, /* @__PURE__ */ import_react9.default.createElement(
    BaseInput,
    {
      className: inputClassName,
      disabled,
      error,
      extraInputAttrs: {
        checked,
        onBlur: componentOnBlur,
        onChange: componentOnChange,
        onFocus: componentOnFocus,
        onInput: componentOnInput,
        ...extraAria
      },
      id,
      name,
      ref,
      title,
      type,
      value
    }
  ));
};

// src/partials/BaseChoiceInput/BaseChoiceInput.types.ts
var INPUT_CHOICE_TYPE_VALUES = ["checkbox", "radio"];

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
var import_ids_core7 = require("@ibexa/ids-core");

// src/hoc/withStateChecked.tsx
var import_react10 = __toESM(require("react"));
var withStateChecked = (WrappedComponent) => {
  const WrapperComponent = ({ checked, onChange, ...restProps }) => {
    const [componentChecked, setComponentChecked] = (0, import_react10.useState)(checked);
    const handleChange = (...args) => {
      setComponentChecked(args[0]);
      if (onChange) {
        onChange(...args);
      }
    };
    (0, import_react10.useEffect)(() => {
      setComponentChecked(checked);
    }, [checked]);
    return /* @__PURE__ */ import_react10.default.createElement(WrappedComponent, { ...restProps, checked: componentChecked, onChange: handleChange });
  };
  WrapperComponent.displayName = `withStateChecked(${WrappedComponent.displayName ?? WrappedComponent.name})`;
  return WrapperComponent;
};

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
var AltRadioInput = ({ className = "", label, tileClassName = "", title = "", ...inputProps }) => {
  const { checked = false, disabled = false, error = false, onBlur, onChange, onFocus } = inputProps;
  const inputRef = (0, import_react11.useRef)(null);
  const [isFocused, setIsFocused] = (0, import_react11.useState)(false);
  const altRadioClassName = (0, import_ids_core7.createCssClassNames)({
    "ids-alt-radio": true,
    [className]: !!className
  });
  const altRadioTileClassName = (0, import_ids_core7.createCssClassNames)({
    "ids-alt-radio__tile": true,
    "ids-alt-radio__tile--checked": checked,
    "ids-alt-radio__tile--disabled": disabled,
    "ids-alt-radio__tile--error": error,
    "ids-alt-radio__tile--focused": isFocused,
    [tileClassName]: !!tileClassName
  });
  const onTileClick = () => {
    inputRef.current?.focus();
    if (!checked) {
      onChange?.(true);
    }
  };
  const onInputFocus = (event) => {
    setIsFocused(true);
    onFocus?.(event);
  };
  const onInputBlur = (event) => {
    setIsFocused(false);
    onBlur?.(event);
  };
  return /* @__PURE__ */ import_react11.default.createElement("div", { className: altRadioClassName, title }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "ids-alt-radio__source" }, /* @__PURE__ */ import_react11.default.createElement(
    BaseChoiceInput,
    {
      ...inputProps,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      ref: (node) => {
        inputRef.current = node;
        if (typeof inputProps.ref === "function") {
          inputProps.ref(node);
        } else if (inputProps.ref) {
          inputProps.ref.current = node;
        }
      },
      type: "radio"
    }
  )), /* @__PURE__ */ import_react11.default.createElement("div", { className: altRadioTileClassName, onClick: onTileClick, role: "button" }, label));
};
var AltRadioInputStateful = withStateChecked(AltRadioInput);

// src/components/Autosave/Autosave.tsx
var import_react12 = __toESM(require("react"));
var import_ids_core8 = require("@ibexa/ids-core");

// src/components/Autosave/Autosave.types.ts
var AutosaveStatus = /* @__PURE__ */ ((AutosaveStatus2) => {
  AutosaveStatus2["On"] = "on";
  AutosaveStatus2["Saving"] = "saving";
  AutosaveStatus2["Saved"] = "saved";
  AutosaveStatus2["Error"] = "error";
  return AutosaveStatus2;
})(AutosaveStatus || {});

// src/components/Autosave/Autosave.tsx
var Autosave = ({ isDarkMode = false, isEnabled, lastSavedTime, status = "on" /* On */ }) => {
  const Translator = (0, import_react12.useContext)(TranslatorContext);
  const classes = (0, import_ids_core8.createCssClassNames)({
    "ids-autosave": true,
    "ids-autosave--error": status === "error" /* Error */,
    "ids-autosave--light": isDarkMode
  });
  const tooltipMessage = "content.autosave.turn_off.message";
  const getIconName = () => {
    if (!isEnabled) {
      return "autosave-off";
    }
    switch (status) {
      case "on" /* On */:
        return "autosave-on";
      case "saving" /* Saving */:
        return "autosave-saving";
      case "saved" /* Saved */:
        return "autosave-saved";
      case "error" /* Error */:
        return "autosave-error";
      default:
        return "autosave-off";
    }
  };
  const getStatusMessage = () => {
    const offMessage = Translator.trans(
      /*@Desc("Autosave is off, draft not created")*/
      "content_edit.autosave.status_off.message"
    );
    if (!isEnabled) {
      return offMessage;
    }
    switch (status) {
      case "on" /* On */:
        return Translator.trans(
          /*@Desc("Autosave is on, draft created")*/
          "content_edit.autosave.status_on.message"
        );
      case "saving" /* Saving */:
        return Translator.trans(
          /*@Desc("Saving")*/
          "content_edit.autosave.status_saving.message"
        );
      case "saved" /* Saved */:
        return Translator.trans(
          /*@Desc("Autosave is on, draft saved %time%")*/
          "content_edit.autosave.status_saved.message.full",
          {
            time: lastSavedTime?.toString() ?? ""
          }
        );
      case "error" /* Error */:
        return Translator.trans(
          /*@Desc("Saving error")*/
          "content_edit.autosave.status_error.message"
        );
      default:
        return offMessage;
    }
  };
  return /* @__PURE__ */ import_react12.default.createElement("div", { className: classes, title: isEnabled ? tooltipMessage : void 0 }, /* @__PURE__ */ import_react12.default.createElement(Icon, { className: "ids-icon", name: getIconName(), size: "small" /* Small */ }), /* @__PURE__ */ import_react12.default.createElement("div", { className: "ids-autosave__status-message" }, getStatusMessage()));
};

// src/components/Badge/Badge.tsx
var import_react13 = __toESM(require("react"));
var import_ids_core9 = require("@ibexa/ids-core");

// src/components/Badge/Badge.types.ts
var BadgeSize = /* @__PURE__ */ ((BadgeSize2) => {
  BadgeSize2["Medium"] = "medium";
  BadgeSize2["Small"] = "small";
  return BadgeSize2;
})(BadgeSize || {});
var BadgeVariant = /* @__PURE__ */ ((BadgeVariant2) => {
  BadgeVariant2["String"] = "string";
  BadgeVariant2["Number"] = "number";
  return BadgeVariant2;
})(BadgeVariant || {});

// src/components/Badge/Badge.tsx
var MAX_BADGE_VALUE = 99;
var THRESHOLD = {
  ["medium" /* Medium */]: 100,
  ["small" /* Small */]: 10
};
var STRING_THRESHOLD = {
  ["medium" /* Medium */]: 3,
  ["small" /* Small */]: 2
};
var Badge = ({
  className = "",
  maxValue = MAX_BADGE_VALUE,
  size = "medium" /* Medium */,
  value,
  variant = "string" /* String */
}) => {
  const isStretched = variant === "number" /* Number */ ? parseInt(value, 10) >= THRESHOLD[size] : value.length >= STRING_THRESHOLD[size];
  const componentClassName = (0, import_ids_core9.createCssClassNames)({
    "ids-badge": true,
    [`ids-badge--${size}`]: true,
    "ids-badge--stretched": isStretched,
    [className]: !!className
  });
  const formatBadgeValue = (badgeValue) => {
    if (variant === "string" /* String */) {
      return badgeValue;
    }
    const numericValue = parseInt(badgeValue, 10);
    return numericValue > maxValue ? `${maxValue}+` : numericValue.toString();
  };
  return /* @__PURE__ */ import_react13.default.createElement("div", { className: componentClassName }, formatBadgeValue(value));
};

// src/components/Checkbox/CheckboxField/CheckboxField.tsx
var import_react17 = __toESM(require("react"));

// src/partials/BaseChoiceInputField/BaseChoiceInputField.tsx
var import_react15 = __toESM(require("react"));

// src/components/ChoiceInputLabel/ChoiceInputLabel.tsx
var import_react14 = __toESM(require("react"));
var import_ids_core10 = require("@ibexa/ids-core");
var ChoiceInputLabel = ({ children, htmlFor, className = "", title = "" }) => {
  const labelClassName = (0, import_ids_core10.createCssClassNames)({
    "ids-choice-input-label": true,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react14.default.createElement("label", { className: labelClassName, htmlFor, title }, children);
};

// src/partials/BaseChoiceInputField/BaseChoiceInputField.tsx
var import_ids_core11 = require("@ibexa/ids-core");
var BaseChoiceInputField = ({
  children,
  className = "",
  disabled = false,
  error = false,
  id,
  inputWrapperClassName = "",
  labelClassName = "",
  renderInput
}) => {
  const componentClassName = (0, import_ids_core11.createCssClassNames)({
    "ids-choice-input-field": true,
    "ids-choice-input-field--disabled": disabled,
    "ids-choice-input-field--error": error,
    [className]: true
  });
  const componentInputWrapperClassName = (0, import_ids_core11.createCssClassNames)({
    "ids-choice-input-field__input-wrapper": true,
    [inputWrapperClassName]: true
  });
  const componentLabelClassName = (0, import_ids_core11.createCssClassNames)({
    "ids-choice-input-field__label": true,
    [labelClassName]: true
  });
  return /* @__PURE__ */ import_react15.default.createElement("div", { className: componentClassName }, /* @__PURE__ */ import_react15.default.createElement("div", { className: componentInputWrapperClassName }, renderInput()), /* @__PURE__ */ import_react15.default.createElement(ChoiceInputLabel, { className: componentLabelClassName, htmlFor: id }, children));
};

// src/components/Checkbox/CheckboxInput/CheckboxInput.tsx
var import_react16 = __toESM(require("react"));
var import_ids_core12 = require("@ibexa/ids-core");
var CheckboxInput = ({ className = "", indeterminate = false, ...restProps }) => {
  const checkboxClassName = (0, import_ids_core12.createCssClassNames)({
    "ids-checkbox": true,
    [className]: true
  });
  const inputClassName = (0, import_ids_core12.createCssClassNames)({
    "ids-input--indeterminate": indeterminate
  });
  return /* @__PURE__ */ import_react16.default.createElement(
    BaseChoiceInput,
    {
      className: checkboxClassName,
      inputClassName,
      ref: (node) => {
        if (node) {
          node.indeterminate = indeterminate;
        }
      },
      type: "checkbox",
      ...restProps
    }
  );
};
var CheckboxInputStateful = withStateChecked(CheckboxInput);

// src/components/Checkbox/CheckboxField/CheckboxField.tsx
var import_ids_core13 = require("@ibexa/ids-core");
var CheckboxField = ({
  className = "",
  label,
  inputWrapperClassName = "",
  labelClassName = "",
  ...inputProps
}) => {
  const fieldClassName = (0, import_ids_core13.createCssClassNames)({
    "ids-checkbox-field": true,
    [className]: !!className
  });
  const renderInput = (0, import_react17.useCallback)(() => {
    return /* @__PURE__ */ import_react17.default.createElement(CheckboxInput, { ...inputProps });
  }, [inputProps]);
  return /* @__PURE__ */ import_react17.default.createElement(
    BaseChoiceInputField,
    {
      className: fieldClassName,
      id: inputProps.id,
      inputWrapperClassName,
      labelClassName,
      renderInput
    },
    label
  );
};
var CheckboxFieldStateful = withStateChecked(CheckboxField);

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
var import_react23 = __toESM(require("react"));

// src/partials/BaseInputsList/BaseInputsList.tsx
var import_react21 = __toESM(require("react"));

// src/partials/BaseField/BaseField.tsx
var import_react20 = __toESM(require("react"));

// src/components/HelperText/HelperText.tsx
var import_react18 = __toESM(require("react"));
var import_ids_core14 = require("@ibexa/ids-core");

// src/components/HelperText/HelperText.types.ts
var HelperTextType = /* @__PURE__ */ ((HelperTextType2) => {
  HelperTextType2["Default"] = "default";
  HelperTextType2["Error"] = "error";
  return HelperTextType2;
})(HelperTextType || {});

// src/components/HelperText/HelperText.tsx
var ICONS_TYPE_MAP = {
  default: "info-circle",
  error: "alert-error"
};
var HelperText = ({ children, className = "", title = "", type = "default" /* Default */ }) => {
  if (!children) {
    return null;
  }
  const componentClassName = (0, import_ids_core14.createCssClassNames)({
    "ids-helper-text": true,
    [`ids-helper-text--${type}`]: !!type,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react18.default.createElement("div", { className: componentClassName, title }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "ids-helper-text__icon-wrapper" }, /* @__PURE__ */ import_react18.default.createElement(Icon, { className: "ids-helper-text__icon", name: ICONS_TYPE_MAP[type], size: "tiny-small" /* TinySmall */ })), /* @__PURE__ */ import_react18.default.createElement("div", { className: "ids-helper-text__content-wrapper" }, children));
};

// src/components/Label/Label.tsx
var import_react19 = __toESM(require("react"));
var import_ids_core15 = require("@ibexa/ids-core");
var Label = ({ children, htmlFor, error = false, className = "", required = false, title = "" }) => {
  const componentClassName = (0, import_ids_core15.createCssClassNames)({
    "ids-label": true,
    "ids-label--error": error,
    "ids-label--required": required,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react19.default.createElement("label", { className: componentClassName, htmlFor, title }, children);
};

// src/partials/BaseField/BaseField.tsx
var import_ids_core16 = require("@ibexa/ids-core");
var BaseField = ({ children, className = "", helperText, label, type }) => {
  const classes = (0, import_ids_core16.createCssClassNames)({
    "ids-field": true,
    [`ids-field--${type}`]: true,
    [className]: !!className
  });
  const renderLabel = () => {
    if (!label) {
      return null;
    }
    const { children: labelContent, ...labelProps } = label;
    return /* @__PURE__ */ import_react20.default.createElement("div", { className: "ids-field__label-wrapper" }, /* @__PURE__ */ import_react20.default.createElement(Label, { ...labelProps }, labelContent));
  };
  const renderHelperText = () => {
    if (!helperText) {
      return null;
    }
    const { children: helperTextContent, ...helperTextProps } = helperText;
    return /* @__PURE__ */ import_react20.default.createElement("div", { className: "ids-field__helper-text-wrapper" }, /* @__PURE__ */ import_react20.default.createElement(HelperText, { ...helperTextProps }, helperTextContent));
  };
  return /* @__PURE__ */ import_react20.default.createElement("div", { className: classes }, renderLabel(), /* @__PURE__ */ import_react20.default.createElement("div", { className: "ids-field__source-wrapper" }, children), renderHelperText());
};

// src/partials/BaseInputsList/BaseInputsList.tsx
var import_ids_core17 = require("@ibexa/ids-core");

// src/partials/BaseInputsList/BaseInputsList.types.ts
var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["Horizontal"] = "horizontal";
  Direction2["Vertical"] = "vertical";
  return Direction2;
})(Direction || {});

// src/partials/BaseInputsList/BaseInputsList.tsx
var BaseInputsList = ({
  items,
  renderItem,
  className = "",
  direction = "vertical" /* Vertical */,
  helperTextProps,
  labelProps
}) => {
  const listClassName = (0, import_ids_core17.createCssClassNames)({
    "ids-choice-inputs-list": true,
    [`ids-choice-inputs-list--${direction}`]: true,
    [className]: true
  });
  return /* @__PURE__ */ import_react21.default.createElement(BaseField, { className: listClassName, helperText: helperTextProps, label: labelProps, type: "list" }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "ids-choice-inputs-list__items" }, items.map((item) => renderItem(item))));
};

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
var import_ids_core18 = require("@ibexa/ids-core");

// src/hoc/withStateValue.tsx
var import_react22 = __toESM(require("react"));
var withStateValue = (WrappedComponent) => {
  const WrapperComponent = ({ value, onChange, ...restProps }) => {
    const [componentValue, setComponentValue] = (0, import_react22.useState)(value);
    const handleChange = (...args) => {
      setComponentValue(args[0]);
      if (onChange) {
        onChange(...args);
      }
    };
    (0, import_react22.useEffect)(() => {
      setComponentValue(value);
    }, [value]);
    return /* @__PURE__ */ import_react22.default.createElement(WrappedComponent, { ...restProps, onChange: handleChange, value: componentValue });
  };
  WrapperComponent.displayName = `withStateValue(${WrappedComponent.displayName ?? WrappedComponent.name})`;
  return WrapperComponent;
};

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.types.ts
var CheckboxesListFieldAction = /* @__PURE__ */ ((CheckboxesListFieldAction2) => {
  CheckboxesListFieldAction2["Check"] = "check";
  CheckboxesListFieldAction2["Uncheck"] = "uncheck";
  return CheckboxesListFieldAction2;
})(CheckboxesListFieldAction || {});

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
var CheckboxesListField = ({
  className = "",
  direction = "vertical" /* Vertical */,
  helperText,
  helperTextExtra = {},
  id,
  items,
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false,
  value = []
}) => {
  const componentClassName = (0, import_ids_core18.createCssClassNames)({
    "ids-checkboxes-list-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: false,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const addOrRemoveItem = (0, import_react23.useCallback)(
    (itemValue, itemAdded) => {
      if (itemAdded) {
        return [...value, itemValue];
      }
      return value.filter((checkedValue) => checkedValue !== itemValue);
    },
    [value]
  );
  const renderItem = (0, import_react23.useCallback)(
    (item) => {
      return /* @__PURE__ */ import_react23.default.createElement(
        CheckboxField,
        {
          ...item,
          checked: value.includes(item.value),
          key: item.id,
          name,
          onChange: (...args) => {
            const [itemAdded] = args;
            const nextValue = addOrRemoveItem(item.value, itemAdded);
            const actionPerformed = itemAdded ? "check" /* Check */ : "uncheck" /* Uncheck */;
            onChange(nextValue, item.value, actionPerformed);
            item.onChange?.(...args);
          }
        }
      );
    },
    [addOrRemoveItem, name, onChange, value]
  );
  return /* @__PURE__ */ import_react23.default.createElement(
    BaseInputsList,
    {
      className: componentClassName,
      direction,
      helperTextProps,
      items,
      labelProps,
      renderItem
    }
  );
};
var CheckboxesListFieldStateful = withStateValue(CheckboxesListField);

// src/components/Dropdown/DropdownSingleInput/DropdownSingleInput.tsx
var import_react33 = __toESM(require("react"));

// src/partials/BaseDropdown/BaseDropdown.tsx
var import_react32 = __toESM(require("react"));

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
var import_react30 = __toESM(require("react"));
var import_react31 = require("@floating-ui/react");

// src/partials/BaseDropdown/components/Search/Search.tsx
var import_react28 = __toESM(require("react"));

// src/components/InputText/InputTextField/InputTextField.tsx
var import_react27 = __toESM(require("react"));

// src/components/InputText/InputTextField/InputTextField.utils.ts
var import_react24 = require("react");
var import_ids_core19 = require("@ibexa/ids-core");

// src/shared/validators.ts
var validateInput = (value, validators) => {
  const errors = validators.reduce((errorsAcc, validator) => {
    if (!validator.validate(value)) {
      return [...errorsAcc, validator.getErrorMessage()];
    }
    return errorsAcc;
  }, []);
  return { isValid: !errors.length, messages: errors };
};

// src/components/InputText/InputTextField/InputTextField.utils.ts
var useInitValidators = ({ required }) => {
  const translator = (0, import_react24.useContext)(TranslatorContext);
  const validators = (0, import_react24.useMemo)(() => {
    const validatorsList = [];
    if (required) {
      validatorsList.push(new import_ids_core19.IsEmptyStringValidator(translator));
    }
    return validatorsList;
  }, [required, translator]);
  return validators;
};
var useValidateInput = ({
  validators,
  value
}) => {
  const initialValue = (0, import_react24.useRef)(value);
  const [isDirty, setIsDirty] = (0, import_react24.useState)(false);
  (0, import_react24.useEffect)(() => {
    if (initialValue.current !== value) {
      setIsDirty(true);
    }
    initialValue.current = value;
  }, [value]);
  return (0, import_react24.useMemo)(() => {
    if (!isDirty) {
      return { isValid: true, messages: [] };
    }
    return validateInput(value, validators);
  }, [initialValue.current, value, validators]);
};

// src/components/InputText/InputTextInput/InputTextInput.tsx
var import_react26 = __toESM(require("react"));

// src/ui/ClearBtn/ClearBtn.tsx
var import_react25 = __toESM(require("react"));
var import_ids_core20 = require("@ibexa/ids-core");
var ClearBtn = ({ onClick, disabled = false }) => {
  const Translator = (0, import_react25.useContext)(TranslatorContext);
  const clearMsg = Translator.trans(
    /*@Desc("Clear")*/
    "ids.clear_btn.label"
  );
  const componentClassName = (0, import_ids_core20.createCssClassNames)({
    "ids-clear-btn": true
  });
  return /* @__PURE__ */ import_react25.default.createElement(
    Button,
    {
      ariaLabel: clearMsg,
      className: componentClassName,
      disabled,
      icon: "discard",
      onClick,
      size: "small" /* Small */,
      title: clearMsg,
      type: "tertiary-alt" /* TertiaryAlt */
    }
  );
};

// src/components/InputText/InputTextInput/InputTextInput.tsx
var import_ids_core21 = require("@ibexa/ids-core");

// src/components/InputText/InputTextInput/InputTextInput.types.ts
var InputTextInputSize = /* @__PURE__ */ ((InputTextInputSize2) => {
  InputTextInputSize2["Medium"] = "medium";
  InputTextInputSize2["Small"] = "small";
  return InputTextInputSize2;
})(InputTextInputSize || {});
var INPUT_TEXT_TYPE_VALUES = ["text", "password", "email", "number", "tel", "search", "url"];

// src/components/InputText/InputTextInput/InputTextInput.tsx
var InputTextInput = ({
  name,
  onBlur = () => void 0,
  onChange = () => void 0,
  onFocus = () => void 0,
  onInput = () => void 0,
  disabled = false,
  error = false,
  extraAria = {},
  className = "",
  id,
  placeholder = "",
  processActions = (actions) => actions,
  readOnly = false,
  ref = null,
  required = false,
  size = "medium" /* Medium */,
  title = "",
  type = "text",
  value = ""
}) => {
  const actionsRef = (0, import_react26.useRef)(null);
  const [sourcePadding, setSourcePadding] = (0, import_react26.useState)(0);
  const inputTextClassName = (0, import_ids_core21.createCssClassNames)({
    "ids-input-text": true,
    [className]: true
  });
  const componentOnBlur = (event) => {
    onBlur(event);
  };
  const componentOnChange = (event) => {
    onChange(event.target.value, event);
  };
  const componentOnFocus = (event) => {
    onFocus(event);
  };
  const componentOnInput = (event) => {
    onInput(event);
  };
  const actions = (0, import_react26.useMemo)(() => {
    const baseActions = [];
    if (value) {
      baseActions.push({
        component: /* @__PURE__ */ import_react26.default.createElement(
          ClearBtn,
          {
            disabled,
            onClick: () => {
              onChange("");
            }
          }
        ),
        id: "clear"
      });
    }
    return processActions(baseActions);
  }, [disabled, onChange, processActions, value]);
  const renderActions = () => {
    if (actions.length === 0) {
      return null;
    }
    return /* @__PURE__ */ import_react26.default.createElement("div", { className: "ids-input-text__actions", ref: actionsRef }, actions.map((action) => /* @__PURE__ */ import_react26.default.createElement("div", { className: "ids-input-text__action", key: action.id }, action.component)));
  };
  (0, import_react26.useLayoutEffect)(() => {
    const actionsWidth = actionsRef.current?.offsetWidth ?? 0;
    setSourcePadding(actionsWidth);
  }, [value]);
  return /* @__PURE__ */ import_react26.default.createElement("div", { className: inputTextClassName }, /* @__PURE__ */ import_react26.default.createElement("div", { className: "ids-input-text__source" }, /* @__PURE__ */ import_react26.default.createElement(
    BaseInput,
    {
      disabled,
      error,
      extraInputAttrs: {
        onBlur: componentOnBlur,
        onChange: componentOnChange,
        onFocus: componentOnFocus,
        onInput: componentOnInput,
        placeholder,
        readOnly,
        style: { paddingRight: `${sourcePadding}px` },
        ...extraAria
      },
      id,
      name,
      ref,
      required,
      size,
      title,
      type,
      value
    }
  )), renderActions());
};
var InputTextInputStateful = withStateValue(InputTextInput);

// src/components/InputText/InputTextField/InputTextField.tsx
var import_ids_core22 = require("@ibexa/ids-core");
var InputTextField = ({
  className = "",
  helperText,
  helperTextExtra = {},
  id,
  input = {},
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  onValidate = () => void 0,
  required = false,
  value = ""
}) => {
  const componentClassName = (0, import_ids_core22.createCssClassNames)({
    "ids-input-text-field": true,
    [className]: !!className
  });
  const validators = useInitValidators({ required });
  const { isValid, messages } = useValidateInput({ validators, value });
  const helperTextProps = {
    children: isValid ? helperText : messages.join(", "),
    type: isValid ? "default" /* Default */ : "error" /* Error */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: !isValid,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const inputProps = {
    ...input,
    error: !isValid,
    id,
    name,
    onChange,
    value
  };
  (0, import_react27.useEffect)(() => {
    onValidate(isValid, messages);
  }, [isValid, messages, onValidate]);
  return /* @__PURE__ */ import_react27.default.createElement(BaseField, { className: componentClassName, helperText: helperTextProps, label: labelProps, type: "input-text" }, /* @__PURE__ */ import_react27.default.createElement(InputTextInput, { ...inputProps }));
};
var InputTextFieldStateful = withStateValue(InputTextField);

// src/partials/BaseDropdown/components/Search/Search.tsx
var Search = ({ isVisible, setSearchTerm, searchRef, searchTerm }) => {
  const Translator = (0, import_react28.useContext)(TranslatorContext);
  if (!isVisible) {
    return null;
  }
  const placeholderText = Translator.trans(
    /*@Desc("Search...")*/
    "ids.dropdown.search.placeholder"
  );
  return /* @__PURE__ */ import_react28.default.createElement("div", { className: "ids-dropdown__search" }, /* @__PURE__ */ import_react28.default.createElement(
    InputTextInput,
    {
      name: "dropdown-search",
      onChange: setSearchTerm,
      placeholder: placeholderText,
      ref: searchRef,
      size: "small" /* Small */,
      value: searchTerm
    }
  ));
};

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
var import_ids_core23 = require("@ibexa/ids-core");

// src/hooks/useKeyEvent.ts
var import_react29 = require("react");
var useKeyDown = (key, callback, node) => {
  (0, import_react29.useEffect)(() => {
    const listenerElement = node ?? window;
    const handleKeyDown = (event) => {
      if (event instanceof KeyboardEvent && key.includes(event.key)) {
        callback(event);
      }
    };
    listenerElement.addEventListener("keydown", handleKeyDown);
    return () => {
      listenerElement.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
var ItemsContainer = ({
  closeDropdown,
  filterFunction,
  getItemAttributes,
  getNextFocusableItem: getNextFocusableItem2,
  isItemSelected,
  isOpen,
  items,
  maxVisibleItems,
  onDropdownItemClick,
  referenceElement,
  renderItem
}) => {
  const searchRef = (0, import_react30.useRef)(null);
  const itemsRef = (0, import_react30.useRef)(null);
  const originalItemsMaxHeightRef = (0, import_react30.useRef)(0);
  const [isTopPlacementForced, setIsTopPlacementForced] = (0, import_react30.useState)(false);
  const [searchTerm, setSearchTerm] = (0, import_react30.useState)("");
  const [popperElement, setPopperElement] = (0, import_react30.useState)(null);
  const [itemsContainerWidth, setItemsContainerWidth] = (0, import_react30.useState)(0);
  const [itemsMaxHeight, setItemsMaxHeight] = (0, import_react30.useState)(0);
  const { floatingStyles, placement } = (0, import_react31.useFloating)({
    elements: {
      floating: popperElement,
      reference: referenceElement
    },
    placement: isTopPlacementForced ? "top-start" : "bottom-start",
    strategy: "fixed",
    whileElementsMounted: import_react31.autoUpdate
  });
  const hasSearchInput = items.length > maxVisibleItems;
  const filteredItems = (0, import_react30.useMemo)(() => {
    if (!searchTerm) {
      return items;
    }
    return items.filter((item) => filterFunction(item, searchTerm));
  }, [items, searchTerm, filterFunction]);
  const onItemClick = (item) => {
    onDropdownItemClick(item, {
      closeDropdown
    });
  };
  const itemsContainerStyles = {
    ...floatingStyles,
    width: itemsContainerWidth ? `${itemsContainerWidth}px` : "auto"
  };
  const getItemsStyles = () => {
    const itemsStyles = {
      "--max-visible-items": maxVisibleItems
    };
    if (itemsMaxHeight) {
      itemsStyles.maxHeight = `${itemsMaxHeight}px`;
    }
    return itemsStyles;
  };
  const popperPlacement = placement === "top-start" ? "top" : "bottom";
  const calculateMaxAvailableItemsHeight = (0, import_react30.useCallback)(
    (availableHeight) => {
      if (!isOpen || !popperElement || !itemsRef.current) {
        return 0;
      }
      const { marginTop: itemsMarginTop, marginBottom: itemsMarginBottom } = window.getComputedStyle(popperElement);
      const { top: itemsContainerTop, bottom: itemsContainerBottom } = popperElement.getBoundingClientRect();
      const { top: itemsTop, bottom: itemsBottom } = itemsRef.current.getBoundingClientRect();
      const topHeight = parseInt(itemsMarginTop, 10) + (itemsTop - itemsContainerTop);
      const bottomHeight = parseInt(itemsMarginBottom, 10) + (itemsContainerBottom - itemsBottom);
      const calculatedAvailableHeight = availableHeight - topHeight - bottomHeight;
      return calculatedAvailableHeight;
    },
    [popperElement, isOpen]
  );
  const moveActiveFocus = (event, direction) => {
    if (isOpen) {
      event.preventDefault();
      const { activeElement } = window.document;
      if (activeElement instanceof HTMLElement && itemsRef.current instanceof HTMLUListElement) {
        const nextElement = getNextFocusableItem2(activeElement, direction, {
          itemsList: itemsRef.current,
          search: searchRef.current
        });
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  };
  (0, import_react30.useEffect)(() => {
    const clickOutsideHandler = (event) => {
      if (event.target instanceof Node && !popperElement?.contains(event.target) && !referenceElement?.contains(event.target)) {
        closeDropdown();
      }
    };
    if (isOpen) {
      setSearchTerm("");
      searchRef.current?.focus();
      window.document.body.addEventListener("click", clickOutsideHandler);
      return () => {
        window.document.body.removeEventListener("click", clickOutsideHandler);
      };
    }
  }, [isOpen, popperElement, referenceElement]);
  (0, import_react30.useLayoutEffect)(() => {
    if (isOpen && referenceElement) {
      setItemsContainerWidth(referenceElement.offsetWidth);
      originalItemsMaxHeightRef.current = itemsRef.current?.offsetHeight ?? 0;
    } else {
      setItemsMaxHeight(0);
    }
  }, [isOpen, referenceElement]);
  (0, import_react30.useLayoutEffect)(() => {
    if (floatingStyles.transform && referenceElement) {
      const getAvailableHeight = () => {
        if (popperPlacement === "bottom") {
          const { innerHeight: windowHeight } = window;
          const { bottom: dropdownBottom } = referenceElement.getBoundingClientRect();
          return windowHeight - dropdownBottom;
        }
        return referenceElement.getBoundingClientRect().top;
      };
      const availableHeight = getAvailableHeight();
      const availableItemsHeight = calculateMaxAvailableItemsHeight(availableHeight);
      const originalDropdownFitsInViewport = availableItemsHeight > originalItemsMaxHeightRef.current;
      if (originalDropdownFitsInViewport) {
        setItemsMaxHeight(0);
      } else {
        setItemsMaxHeight(availableItemsHeight);
      }
    }
  }, [floatingStyles.transform, popperPlacement, referenceElement]);
  (0, import_react30.useLayoutEffect)(() => {
    if (isOpen && referenceElement) {
      const { top: referenceTop, bottom: referenceBottom } = referenceElement.getBoundingClientRect();
      const { innerHeight: windowHeight } = window;
      if (referenceBottom < 0 || referenceTop > windowHeight) {
        closeDropdown();
        return;
      }
      const availableSpaceAbove = referenceTop;
      const availableSpaceBelow = windowHeight - referenceBottom;
      const originalDropdownFitsInViewport = availableSpaceBelow > originalItemsMaxHeightRef.current;
      const moreSpaceAbove = availableSpaceAbove > availableSpaceBelow;
      const showDropdownAbove = moreSpaceAbove && !originalDropdownFitsInViewport;
      setIsTopPlacementForced(showDropdownAbove);
    }
  }, [isOpen, referenceElement, floatingStyles.transform]);
  useKeyDown(
    ["Enter", " "],
    (event) => {
      const { activeElement } = window.document;
      if (isOpen && activeElement?.classList.contains("ids-dropdown__item") && activeElement instanceof HTMLElement) {
        event.preventDefault();
        activeElement.click();
      }
    },
    popperElement
  );
  useKeyDown(
    ["Escape"],
    () => {
      if (isOpen) {
        closeDropdown();
        referenceElement?.focus();
      }
    },
    popperElement
  );
  useKeyDown(
    ["ArrowDown", "Tab"],
    (event) => {
      moveActiveFocus(event, "down" /* Down */);
    },
    popperElement
  );
  useKeyDown(
    ["ArrowUp"],
    (event) => {
      moveActiveFocus(event, "up" /* Up */);
    },
    popperElement
  );
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ import_react30.default.createElement("div", { className: "ids-dropdown__items-container", ref: setPopperElement, style: itemsContainerStyles }, /* @__PURE__ */ import_react30.default.createElement(Search, { isVisible: hasSearchInput, searchRef, searchTerm, setSearchTerm }), /* @__PURE__ */ import_react30.default.createElement("ul", { className: "ids-dropdown__items", ref: itemsRef, style: getItemsStyles() }, filteredItems.map((item, index) => {
    const dropdownItemClassName = (0, import_ids_core23.createCssClassNames)({
      "ids-dropdown__item": true,
      "ids-dropdown__item--selected": isItemSelected(item)
    });
    return /* @__PURE__ */ import_react30.default.createElement(
      "li",
      {
        className: dropdownItemClassName,
        key: item.id,
        onClick: () => {
          onItemClick(item);
        },
        ref: (node) => {
          if (index === 0 && !hasSearchInput && node) {
            node.focus();
          }
        },
        role: "button",
        tabIndex: 0,
        ...getItemAttributes(item)
      },
      renderItem(item)
    );
  })));
};

// src/partials/BaseDropdown/BaseDropdown.tsx
var import_ids_core24 = require("@ibexa/ids-core");
var MAX_VISIBLE_ITEMS = 10;
var BaseDropdown = ({
  children,
  isEmpty = true,
  isItemSelected,
  items,
  disabled = false,
  error = false,
  filterFunction = (item, searchTerm) => item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  getItemAttributes = () => ({}),
  getNextFocusableItem: getNextFocusableItem2 = () => null,
  maxVisibleItems = MAX_VISIBLE_ITEMS,
  onDropdownItemClick,
  renderEmptySelectionInfo,
  renderItem = (item) => item.label,
  renderSelectedItems = () => null,
  renderSource = () => null,
  className = ""
}) => {
  const Translator = (0, import_react32.useContext)(TranslatorContext);
  const [referenceElement, setReferenceElement] = (0, import_react32.useState)(null);
  const [isOpen, setIsOpen] = (0, import_react32.useState)(false);
  const dropdownClassName = (0, import_ids_core24.createCssClassNames)({
    "ids-dropdown": true,
    "ids-dropdown--disabled": disabled,
    "ids-dropdown--error": error,
    [className]: !!className
  });
  const dropdownWidgetClassName = (0, import_ids_core24.createCssClassNames)({
    "ids-dropdown__widget ids-input": true,
    "ids-input--disabled": disabled,
    "ids-input--error": error
  });
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const renderSelectionInfo = () => {
    if (children) {
      return children;
    }
    if (isEmpty) {
      if (renderEmptySelectionInfo) {
        return renderEmptySelectionInfo();
      }
      const placeholder = Translator.trans(
        /*@Desc("Select an item")*/
        "ids.dropdown.placeholder"
      );
      return /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__placeholder" }, placeholder);
    }
    return /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__selection-info-items" }, renderSelectedItems());
  };
  useKeyDown(
    ["Enter", " "],
    (event) => {
      const { activeElement } = window.document;
      if (activeElement === referenceElement) {
        event.preventDefault();
        toggleDropdown();
      }
    },
    referenceElement
  );
  return /* @__PURE__ */ import_react32.default.createElement("div", { className: dropdownClassName }, /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__source" }, renderSource()), /* @__PURE__ */ import_react32.default.createElement("div", { className: dropdownWidgetClassName, onClick: toggleDropdown, ref: setReferenceElement, role: "button", tabIndex: 0 }, /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__selection-info" }, renderSelectionInfo()), /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__expander" }, /* @__PURE__ */ import_react32.default.createElement(Expander, { isExpanded: isOpen, isFocusable: false, onClick: toggleDropdown, type: "chevron" /* Chevron */ }))), /* @__PURE__ */ import_react32.default.createElement(
    ItemsContainer,
    {
      closeDropdown: () => {
        setIsOpen(false);
      },
      filterFunction,
      getItemAttributes,
      getNextFocusableItem: getNextFocusableItem2,
      isItemSelected,
      isOpen,
      items,
      maxVisibleItems,
      onDropdownItemClick,
      referenceElement,
      renderItem
    }
  ));
};

// src/components/Dropdown/utils/focus.ts
var getNextFocusableItem = (getFocusableElements, element, direction, extraParams) => {
  const focusableElements = getFocusableElements(extraParams);
  const focusedItemIndex = focusableElements.findIndex((el) => el === element);
  if (direction === "down" /* Down */) {
    const nextElement = focusableElements[focusedItemIndex + 1];
    return nextElement instanceof HTMLElement ? nextElement : element;
  }
  const prevElement = focusableElements[focusedItemIndex - 1];
  return prevElement instanceof HTMLElement ? prevElement : element;
};

// src/components/Dropdown/DropdownSingleInput/DropdownSingleInput.tsx
var import_ids_core25 = require("@ibexa/ids-core");
var DropdownSingleInput = ({
  name,
  className = "",
  items = [],
  onChange = () => void 0,
  value = "",
  ...restProps
}) => {
  const dropdownClassName = (0, import_ids_core25.createCssClassNames)({
    "ids-dropdown--single": true,
    [className]: !!className
  });
  const clickDropdownItem = ({ id }, { closeDropdown }) => {
    onChange(id);
    closeDropdown();
  };
  const selectedItem = value ? items.find((item) => item.id === value) : null;
  const isItemSelected = (item) => item.id === value;
  const renderItem = (item) => {
    return /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, item.label, isItemSelected(item) && /* @__PURE__ */ import_react33.default.createElement(Icon, { name: "check-circle", size: "tiny-small" /* TinySmall */ }));
  };
  const renderSource = () => {
    return /* @__PURE__ */ import_react33.default.createElement("select", { defaultValue: value, name, tabIndex: -1 }, items.map((item) => /* @__PURE__ */ import_react33.default.createElement("option", { key: item.id, value: item.id }, item.label)));
  };
  const getFocusableElements = ({ itemsList, search }) => {
    const focusableElements = [
      ...search ? [search] : [],
      ...Array.from(itemsList.children).filter((child) => !child.classList.contains("ids-dropdown__item--selected"))
    ];
    return focusableElements.filter((element) => element instanceof HTMLElement);
  };
  return /* @__PURE__ */ import_react33.default.createElement(
    BaseDropdown,
    {
      ...restProps,
      className: dropdownClassName,
      getNextFocusableItem: getNextFocusableItem.bind(null, getFocusableElements),
      isEmpty: !selectedItem,
      isItemSelected,
      items,
      onDropdownItemClick: clickDropdownItem,
      renderItem,
      renderSelectedItems: () => selectedItem?.label ?? "",
      renderSource
    }
  );
};
var DropdownSingleInputStateful = withStateValue(DropdownSingleInput);

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
var import_react37 = __toESM(require("react"));

// src/components/Chip/Chip.tsx
var import_react34 = __toESM(require("react"));
var import_ids_core26 = require("@ibexa/ids-core");
var Chip = ({ children, className = "", disabled = false, error = false, isDeletable = true, onDelete }) => {
  const Translator = (0, import_react34.useContext)(TranslatorContext);
  const deleteMsg = Translator.trans(
    /*@Desc("Delete")*/
    "ibexa.chip.delete-btn.label"
  );
  const componentClassName = (0, import_ids_core26.createCssClassNames)({
    "ids-chip": true,
    "ids-chip--disabled": disabled,
    "ids-chip--error": error,
    [className]: !!className
  });
  const handleDeleteClick = (event) => {
    if (onDelete) {
      onDelete(event);
    }
  };
  const renderDeleteButton = () => {
    if (!isDeletable) {
      return null;
    }
    return /* @__PURE__ */ import_react34.default.createElement(
      Button,
      {
        "aria-label": deleteMsg,
        className: "ids-chip__delete",
        disabled,
        icon: "discard",
        isFocusable: true,
        onClick: handleDeleteClick,
        size: "small" /* Small */,
        type: "tertiary-alt" /* TertiaryAlt */
      }
    );
  };
  return /* @__PURE__ */ import_react34.default.createElement("div", { "aria-disabled": disabled, className: componentClassName, tabIndex: disabled ? -1 : 0 }, /* @__PURE__ */ import_react34.default.createElement("div", { className: "ids-chip__content" }, children), renderDeleteButton());
};

// src/components/OverflowList/OverflowList.tsx
var import_react36 = __toESM(require("react"));
var import_ids_core27 = require("@ibexa/ids-core");

// src/hooks/useDebounce.ts
var import_react35 = require("react");
var useDebounce = (delay) => {
  const timeoutRef = (0, import_react35.useRef)(null);
  (0, import_react35.useEffect)(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });
  return (0, import_react35.useCallback)(
    (callback) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    },
    [delay]
  );
};

// src/components/OverflowList/OverflowList.tsx
var RESIZE_TIMEOUT = 200;
var OverflowList = ({
  className = "",
  items = [],
  renderItem,
  renderMore
}) => {
  const listRef = (0, import_react36.useRef)(null);
  const itemsRef = (0, import_react36.useRef)(null);
  const [itemsWidth, setItemsWidth] = (0, import_react36.useState)(0);
  const [currentAction, setCurrentAction] = (0, import_react36.useState)("none" /* None */);
  const [numberOfVisibleItems, setNumberOfVisibleItems] = (0, import_react36.useState)(items.length);
  const debounce = useDebounce(RESIZE_TIMEOUT);
  const componentClassName = (0, import_ids_core27.createCssClassNames)({
    "ids-overflow-list": true,
    [className]: !!className
  });
  const recalculateVisibleItems = () => {
    if (!itemsRef.current) {
      return;
    }
    const itemsNodes = Array.from(itemsRef.current.children);
    const { right: listRightPosition } = itemsRef.current.getBoundingClientRect();
    const newNumberOfVisibleItems = itemsNodes.findIndex((itemNode) => {
      const { right: itemRightPosition } = itemNode.getBoundingClientRect();
      return itemRightPosition > listRightPosition;
    });
    if (newNumberOfVisibleItems === -1 || newNumberOfVisibleItems === items.length) {
      return true;
    }
    if (newNumberOfVisibleItems === numberOfVisibleItems) {
      setNumberOfVisibleItems(newNumberOfVisibleItems - 1);
    } else {
      setNumberOfVisibleItems(newNumberOfVisibleItems);
    }
    return false;
  };
  const listResizeObserver = (0, import_react36.useMemo)(
    () => new ResizeObserver(() => {
      debounce(() => {
        setItemsWidth(listRef.current?.offsetWidth ?? 0);
        setNumberOfVisibleItems(items.length);
        setCurrentAction("calculate-items" /* CalculateItems */);
      });
    }),
    [items.length, debounce]
  );
  const renderItems = () => {
    return items.slice(0, numberOfVisibleItems).map((item) => renderItem(item));
  };
  const renderOverflow = () => {
    const hiddenCount = items.length - numberOfVisibleItems;
    if (hiddenCount > 0) {
      return renderMore({ hiddenCount });
    }
  };
  (0, import_react36.useLayoutEffect)(() => {
    if (currentAction === "calculate-items" /* CalculateItems */) {
      const stopRecalculating = recalculateVisibleItems();
      if (stopRecalculating) {
        setCurrentAction("none" /* None */);
      }
    }
  }, [currentAction, numberOfVisibleItems]);
  (0, import_react36.useLayoutEffect)(() => {
    if (listRef.current) {
      setItemsWidth(listRef.current.offsetWidth);
    }
  }, []);
  (0, import_react36.useEffect)(() => {
    if (currentAction === "none" /* None */) {
      setNumberOfVisibleItems(items.length);
      setCurrentAction("calculate-items" /* CalculateItems */);
    }
  }, [items]);
  (0, import_react36.useEffect)(() => {
    if (listRef.current) {
      listResizeObserver.observe(listRef.current);
    }
    return () => {
      listResizeObserver.disconnect();
    };
  }, []);
  return /* @__PURE__ */ import_react36.default.createElement("div", { className: componentClassName, ref: listRef }, /* @__PURE__ */ import_react36.default.createElement("div", { className: "ids-overflow-list__items", ref: itemsRef, style: { width: `${itemsWidth}px` } }, renderItems(), renderOverflow()));
};

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
var import_ids_core28 = require("@ibexa/ids-core");

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.types.ts
var DropdownMultiInputAction = /* @__PURE__ */ ((DropdownMultiInputAction2) => {
  DropdownMultiInputAction2["Check"] = "check";
  DropdownMultiInputAction2["Uncheck"] = "uncheck";
  return DropdownMultiInputAction2;
})(DropdownMultiInputAction || {});

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
var DropdownMultiInput = ({
  name,
  className = "",
  items = [],
  onChange = () => void 0,
  value = [],
  ...restProps
}) => {
  const dropdownClassName = (0, import_ids_core28.createCssClassNames)({
    "ids-dropdown--multi": true,
    [className]: !!className
  });
  const changeValue = (id) => {
    const oldValueLength = value.length;
    const newValue = value.includes(id) ? value.filter((val) => val !== id) : [...value, id];
    const actionPerformed = newValue.length > oldValueLength ? "check" /* Check */ : "uncheck" /* Uncheck */;
    onChange(newValue, id, actionPerformed);
  };
  const clickDropdownItem = ({ id }) => {
    changeValue(id);
  };
  const getItemAttributes = () => {
    return {
      role: void 0,
      tabIndex: void 0
    };
  };
  const isItemSelected = (item) => value.includes(item.id);
  const renderItem = (item) => {
    return /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, /* @__PURE__ */ import_react37.default.createElement(CheckboxInput, { checked: isItemSelected(item), name: `${name}-checkbox`, value: item.id }), item.label);
  };
  const selectedItems = value.length ? items.filter((item) => value.includes(item.id)) : [];
  const renderSelectedItems = () => /* @__PURE__ */ import_react37.default.createElement(
    OverflowList,
    {
      items: selectedItems,
      renderItem: (item) => /* @__PURE__ */ import_react37.default.createElement(
        Chip,
        {
          key: item.id,
          onDelete: () => {
            changeValue(item.id);
          }
        },
        item.label
      ),
      renderMore: ({ hiddenCount }) => /* @__PURE__ */ import_react37.default.createElement(Chip, { isDeletable: false }, "+", hiddenCount)
    }
  );
  const renderSource = () => {
    return /* @__PURE__ */ import_react37.default.createElement("select", { defaultValue: value, multiple: true, name, tabIndex: -1 }, items.map((item) => /* @__PURE__ */ import_react37.default.createElement("option", { key: item.id, value: item.id }, item.label)));
  };
  const getFocusableElements = ({ itemsList, search }) => {
    const focusableElements = [
      ...search instanceof HTMLElement ? [search] : [],
      ...Array.from(itemsList.children).reduce((acc, child) => {
        if (child instanceof HTMLElement) {
          const checkbox = child.querySelector(".ids-input--checkbox");
          if (checkbox instanceof HTMLElement && !checkbox.classList.contains("ids-input--disabled")) {
            acc.push(checkbox);
          }
        }
        return acc;
      }, [])
    ];
    return focusableElements;
  };
  return /* @__PURE__ */ import_react37.default.createElement(
    BaseDropdown,
    {
      ...restProps,
      className: dropdownClassName,
      getItemAttributes,
      getNextFocusableItem: getNextFocusableItem.bind(null, getFocusableElements),
      isEmpty: selectedItems.length === 0,
      isItemSelected,
      items,
      onDropdownItemClick: clickDropdownItem,
      renderItem,
      renderSelectedItems,
      renderSource
    }
  );
};
var DropdownMultiInputStateful = withStateValue(DropdownMultiInput);

// src/components/RadioButton/RadioButtonField/RadioButtonField.tsx
var import_react39 = __toESM(require("react"));

// src/components/RadioButton/RadioButtonInput/RadioButtonInput.tsx
var import_react38 = __toESM(require("react"));
var import_ids_core29 = require("@ibexa/ids-core");
var RadioButtonInput = ({ className = "", ...restProps }) => {
  const radioButtonClassName = (0, import_ids_core29.createCssClassNames)({
    "ids-radio-button": true,
    [className]: true
  });
  return /* @__PURE__ */ import_react38.default.createElement(BaseChoiceInput, { ...restProps, className: radioButtonClassName, type: "radio" });
};
var RadioButtonInputStateful = withStateChecked(RadioButtonInput);

// src/components/RadioButton/RadioButtonField/RadioButtonField.tsx
var import_ids_core30 = require("@ibexa/ids-core");
var RadioButtonField = ({
  className = "",
  inputWrapperClassName = "",
  label,
  labelClassName = "",
  ...inputProps
}) => {
  const fieldClassName = (0, import_ids_core30.createCssClassNames)({
    "ids-radio-button-field": true,
    [className]: !!className
  });
  const renderInput = (0, import_react39.useCallback)(() => {
    return /* @__PURE__ */ import_react39.default.createElement(RadioButtonInput, { ...inputProps });
  }, [inputProps]);
  return /* @__PURE__ */ import_react39.default.createElement(
    BaseChoiceInputField,
    {
      className: fieldClassName,
      disabled: inputProps.disabled,
      error: inputProps.error,
      id: inputProps.id,
      inputWrapperClassName,
      labelClassName,
      renderInput
    },
    label
  );
};
var RadioButtonFieldStateful = withStateChecked(RadioButtonField);

// src/components/RadioButton/RadioButtonsListField/RadioButtonsListField.tsx
var import_react40 = __toESM(require("react"));
var import_ids_core31 = require("@ibexa/ids-core");
var RadioButtonsListField = ({
  className = "",
  direction = "vertical" /* Vertical */,
  helperText,
  helperTextExtra = {},
  id,
  items,
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false,
  value = ""
}) => {
  const componentClassName = (0, import_ids_core31.createCssClassNames)({
    "ids-radio-buttons-list-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: false,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const renderItem = (item) => {
    return /* @__PURE__ */ import_react40.default.createElement(
      RadioButtonField,
      {
        ...item,
        checked: item.value === value,
        name,
        onChange: (...args) => {
          onChange(item.value);
          item.onChange?.(...args);
        }
      }
    );
  };
  return /* @__PURE__ */ import_react40.default.createElement(
    BaseInputsList,
    {
      className: componentClassName,
      direction,
      helperTextProps,
      items,
      labelProps,
      renderItem
    }
  );
};
var RadioButtonsListFieldStateful = withStateValue(RadioButtonsListField);

// src/components/Tag/Tag.tsx
var import_react41 = __toESM(require("react"));
var import_ids_core32 = require("@ibexa/ids-core");

// src/components/Tag/Tag.types.ts
var TagSize = /* @__PURE__ */ ((TagSize2) => {
  TagSize2["Medium"] = "medium";
  TagSize2["Small"] = "small";
  return TagSize2;
})(TagSize || {});
var TagGhostType = /* @__PURE__ */ ((TagGhostType2) => {
  TagGhostType2["SuccessGhost"] = "success-ghost";
  TagGhostType2["ErrorGhost"] = "error-ghost";
  TagGhostType2["NeutralGhost"] = "neutral-ghost";
  return TagGhostType2;
})(TagGhostType || {});
var TagType = /* @__PURE__ */ ((TagType3) => {
  TagType3["Primary"] = "primary";
  TagType3["PrimaryAlt"] = "primary-alt";
  TagType3["Success"] = "success";
  TagType3["Info"] = "info";
  TagType3["Warning"] = "warning";
  TagType3["Error"] = "error";
  TagType3["Neutral"] = "neutral";
  TagType3["IconTag"] = "icon-tag";
  return TagType3;
})(TagType || {});

// src/components/Tag/Tag.tsx
var Tag = ({ children, className = "", isDark = false, icon, size = "medium" /* Medium */, type }) => {
  const isGhostType = (tagType) => {
    return Object.values(TagGhostType).includes(tagType);
  };
  const isGhost = isGhostType(type);
  const componentClassName = (0, import_ids_core32.createCssClassNames)({
    "ids-tag": true,
    [`ids-tag--${type}`]: true,
    [`ids-tag--${size}`]: true,
    [`ids-tag--dark`]: isDark,
    [className]: !!className
  });
  const renderDot = () => {
    if (isGhost) {
      return /* @__PURE__ */ import_react41.default.createElement("div", { className: "ids-tag__ghost-dot" });
    }
    return null;
  };
  const renderIcon = () => {
    if (icon) {
      return /* @__PURE__ */ import_react41.default.createElement("div", { className: "ids-tag__icon" }, /* @__PURE__ */ import_react41.default.createElement(Icon, { name: icon, size: "small" /* Small */ }));
    }
    return null;
  };
  return /* @__PURE__ */ import_react41.default.createElement("div", { className: componentClassName }, renderDot(), renderIcon(), /* @__PURE__ */ import_react41.default.createElement("div", { className: "ids-tag__content" }, children));
};

// src/components/ToggleButton/ToggleButtonField/ToggleButtonField.tsx
var import_react43 = __toESM(require("react"));

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.tsx
var import_react42 = __toESM(require("react"));
var import_ids_core33 = require("@ibexa/ids-core");

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.types.ts
var ToggleButtonInputSize = /* @__PURE__ */ ((ToggleButtonInputSize2) => {
  ToggleButtonInputSize2["Small"] = "small";
  ToggleButtonInputSize2["Medium"] = "medium";
  return ToggleButtonInputSize2;
})(ToggleButtonInputSize || {});

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.tsx
var ToggleButtonInput = ({
  className = "",
  offLabel,
  onLabel,
  size = "medium" /* Medium */,
  title = "",
  ...inputProps
}) => {
  const {
    checked = false,
    disabled = false,
    id,
    onBlur = () => void 0,
    onChange = () => void 0,
    onFocus = () => void 0,
    onInput = () => void 0
  } = inputProps;
  const Translator = (0, import_react42.useContext)(TranslatorContext);
  const componentId = useGetOrCreateId(id);
  const inputRef = (0, import_react42.useRef)(null);
  const [isFocused, setIsFocused] = (0, import_react42.useState)(false);
  const toggleClassName = (0, import_ids_core33.createCssClassNames)({
    "ids-toggle": true,
    [`ids-toggle--${size}`]: true,
    "ids-toggle--checked": checked,
    "ids-toggle--disabled": disabled,
    "ids-toggle--focused": isFocused,
    [className]: !!className
  });
  const onTogglerClick = () => {
    inputRef.current?.focus();
    onChange(!checked);
  };
  const onInputFocus = (event) => {
    setIsFocused(true);
    onFocus(event);
  };
  const onInputBlur = (event) => {
    setIsFocused(false);
    onBlur(event);
  };
  const getLabel = () => {
    const defaultOnLabel = Translator.trans(
      /*@Desc("On")*/
      "ids.toggle.label.on"
    );
    const defaultOffLabel = Translator.trans(
      /*@Desc("Off")*/
      "ids.toggle.label.off"
    );
    if (checked) {
      return onLabel ?? defaultOnLabel;
    }
    return offLabel ?? defaultOffLabel;
  };
  return /* @__PURE__ */ import_react42.default.createElement("div", { className: toggleClassName, title }, /* @__PURE__ */ import_react42.default.createElement("div", { className: "ids-toggle__source" }, /* @__PURE__ */ import_react42.default.createElement(
    BaseChoiceInput,
    {
      ...inputProps,
      id: componentId,
      onBlur: onInputBlur,
      onChange,
      onFocus: onInputFocus,
      onInput,
      ref: (node) => {
        inputRef.current = node;
        if (typeof inputProps.ref === "function") {
          inputProps.ref(node);
        } else if (inputProps.ref) {
          inputProps.ref.current = node;
        }
      },
      type: "checkbox"
    }
  )), /* @__PURE__ */ import_react42.default.createElement("div", { className: "ids-toggle__widget", onClick: onTogglerClick, role: "button" }, /* @__PURE__ */ import_react42.default.createElement("div", { className: "ids-toggle__indicator" })), /* @__PURE__ */ import_react42.default.createElement(ChoiceInputLabel, { className: "ids-toggle__label", htmlFor: componentId, title }, getLabel()));
};
var ToggleButtonInputStateful = withStateChecked(ToggleButtonInput);

// src/components/ToggleButton/ToggleButtonField/ToggleButtonField.tsx
var import_ids_core34 = require("@ibexa/ids-core");
var ToggleButtonField = ({
  checked = false,
  className = "",
  helperText,
  helperTextExtra = {},
  id,
  input = {},
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false
}) => {
  const toggleClassName = (0, import_ids_core34.createCssClassNames)({
    "ids-toggle-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    required,
    ...labelExtra
  };
  const inputProps = {
    ...input,
    checked,
    id,
    name,
    onChange
  };
  return /* @__PURE__ */ import_react43.default.createElement(BaseField, { className: toggleClassName, helperText: helperTextProps, label: labelProps, type: "toggle" }, /* @__PURE__ */ import_react43.default.createElement(ToggleButtonInput, { ...inputProps }));
};
var ToggleButtonFieldStateful = withStateChecked(ToggleButtonField);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AltRadioInput,
  AltRadioInputStateful,
  AssetsContext,
  AssetsProvider,
  Autosave,
  AutosaveStatus,
  BASE_INPUT_TYPE_VALUES,
  Badge,
  BadgeSize,
  BadgeVariant,
  BaseChoiceInput,
  BaseChoiceInputField,
  BaseDropdown,
  BaseField,
  BaseInput,
  BaseInputsList,
  Button,
  ButtonSize,
  ButtonType,
  CheckboxField,
  CheckboxFieldStateful,
  CheckboxInput,
  CheckboxInputStateful,
  CheckboxesListField,
  CheckboxesListFieldAction,
  CheckboxesListFieldDirection,
  CheckboxesListFieldStateful,
  ChoiceInputLabel,
  Direction,
  DropdownMultiInput,
  DropdownMultiInputAction,
  DropdownMultiInputStateful,
  DropdownSingleInput,
  DropdownSingleInputStateful,
  Expander,
  ExpanderType,
  HelperText,
  HelperTextType,
  INPUT_CHOICE_TYPE_VALUES,
  INPUT_TEXT_TYPE_VALUES,
  Icon,
  IconSize,
  InputTextField,
  InputTextFieldSize,
  InputTextFieldStateful,
  InputTextInput,
  InputTextInputSize,
  InputTextInputStateful,
  Label,
  RadioButtonField,
  RadioButtonFieldStateful,
  RadioButtonInput,
  RadioButtonInputStateful,
  RadioButtonsListField,
  RadioButtonsListFieldDirection,
  RadioButtonsListFieldStateful,
  Tag,
  TagGhostType,
  TagSize,
  TagType,
  ToggleButtonField,
  ToggleButtonFieldSize,
  ToggleButtonFieldStateful,
  ToggleButtonInput,
  ToggleButtonInputSize,
  ToggleButtonInputStateful,
  TranslatorContext,
  TranslatorProvider,
  useGetOrCreateId,
  useKeyDown,
  validateInput,
  withStateChecked,
  withStateValue
});
//# sourceMappingURL=index.js.map
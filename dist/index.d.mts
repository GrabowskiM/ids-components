import React$1, { ReactNode, FC, Ref, InputHTMLAttributes } from 'react';
import { BaseValidator, ValidationResult } from '@ibexa/ids-core';

interface AccordionProps {
    children: ReactNode;
    header: ReactNode;
    initiallyExpanded?: boolean;
    onHandleExpand?: (isExpanded: boolean) => void;
}

declare const Accordion: ({ children, header, initiallyExpanded, onHandleExpand }: AccordionProps) => React$1.JSX.Element;

type OnChangeFn$1 = (checked: boolean, ...args: any[]) => any;
interface BaseProps$1 {
    onChange?: OnChangeFn$1;
    checked: boolean;
}
type WithStateCheckedWrappedComponentProps<T extends object> = BaseProps$1 & T;
declare const withStateChecked: <T extends object>(WrappedComponent: FC<any>) => {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<T>): React$1.JSX.Element;
    displayName: string;
};

type ExtraAriaType = Record<`aria-${string}`, boolean | number | string>;

interface BaseComponentAttributes {
    className?: string;
    title?: string;
}

interface BaseComponentAriaAttributes extends BaseComponentAttributes {
    extraAria?: ExtraAriaType;
}

interface ComponentEntryDataType {
    id: string;
    component: ReactNode;
}

declare const INPUT_CHOICE_TYPE_VALUES: ["checkbox", "radio"];
type InputChoiceTypesType = (typeof INPUT_CHOICE_TYPE_VALUES)[number];
interface BaseChoiceInputProps extends BaseComponentAriaAttributes {
    name: string;
    type: InputChoiceTypesType;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onInput?: React.InputEventHandler<HTMLInputElement>;
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    id?: string;
    inputClassName?: string;
    ref?: Ref<HTMLInputElement>;
    value?: string;
}

declare const BaseChoiceInput: ({ name, type, onBlur, onChange, onFocus, onInput, checked, className, disabled, error, extraAria, id, inputClassName, ref, title, value, }: BaseChoiceInputProps) => React$1.JSX.Element;

interface AltRadioInputProps extends Omit<BaseChoiceInputProps, 'type'> {
    label: ReactNode;
    tileClassName?: string;
    value: string;
}

declare const AltRadioInput: ({ className, label, tileClassName, title, ...inputProps }: AltRadioInputProps) => React$1.JSX.Element;
declare const AltRadioInputStateful: {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<AltRadioInputProps>): React$1.JSX.Element;
    displayName: string;
};

declare enum AutosaveStatus {
    On = "on",
    Saving = "saving",
    Saved = "saved",
    Error = "error"
}
interface AutosaveSharedProps {
    isDarkMode?: boolean;
    isEnabled?: boolean;
}
interface AutosaveEnabledProps extends AutosaveSharedProps {
    isEnabled: true;
    status?: Exclude<AutosaveStatus, AutosaveStatus.Saved>;
    lastSavedTime?: never;
}
interface AutosaveDisabledProps extends AutosaveSharedProps {
    isEnabled: false;
    status?: never;
    lastSavedTime?: never;
}
interface AutosaveSavedProps extends AutosaveSharedProps {
    isEnabled: true;
    status?: AutosaveStatus.Saved;
    lastSavedTime?: Date;
}
type AutosaveProps = AutosaveEnabledProps | AutosaveDisabledProps | AutosaveSavedProps;

declare const Autosave: ({ isDarkMode, isEnabled, lastSavedTime, status }: AutosaveProps) => React$1.JSX.Element;

declare enum BadgeSize {
    Medium = "medium",
    Small = "small"
}
declare enum BadgeVariant {
    String = "string",
    Number = "number"
}
interface BadgeProps extends BaseComponentAttributes {
    value: string;
    variant?: BadgeVariant;
    maxValue?: number;
    size?: BadgeSize;
}

declare const Badge: ({ className, maxValue, size, value, variant, }: BadgeProps) => React$1.JSX.Element;

declare enum ButtonSize {
    Medium = "medium",
    Small = "small"
}
declare enum ButtonType {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    SecondaryAlt = "secondary-alt",
    TertiaryAlt = "tertiary-alt"
}
interface ButtonSharedProps extends BaseComponentAriaAttributes {
    ariaLabel?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isFocusable?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
}
interface ButtonNoTextProps extends ButtonSharedProps {
    icon: string;
    children?: never;
}
interface ButtonTextProps extends ButtonSharedProps {
    icon?: string;
    children: React.ReactNode;
}
type ButtonProps = ButtonNoTextProps | ButtonTextProps;

declare const Button: ({ onClick, children, ariaLabel, disabled, extraAria, className, icon, isFocusable, size, title, type, }: ButtonProps) => React$1.JSX.Element;

type CheckboxInputProps = Omit<BaseChoiceInputProps, 'type'> & {
    checked?: boolean;
    indeterminate?: boolean;
    value: string;
};

declare const CheckboxInput: ({ className, indeterminate, ...restProps }: CheckboxInputProps) => React$1.JSX.Element;
declare const CheckboxInputStateful: {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<CheckboxInputProps>): React$1.JSX.Element;
    displayName: string;
};

interface CheckboxFieldProps extends CheckboxInputProps {
    id: string;
    label: ReactNode;
    inputWrapperClassName?: string;
    labelClassName?: string;
}

declare const CheckboxField: ({ className, label, inputWrapperClassName, labelClassName, ...inputProps }: CheckboxFieldProps) => React$1.JSX.Element;
declare const CheckboxFieldStateful: {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<CheckboxFieldProps>): React$1.JSX.Element;
    displayName: string;
};

type OnChangeFn<T> = (value: T, ...args: any[]) => any;
interface BaseProps<T> {
    onChange?: OnChangeFn<T>;
    value: T;
}
type WIthStateValueWrappedComponentProps<Props, ValueType> = BaseProps<ValueType> & Props;
declare const withStateValue: <Props, ValueType>(WrappedComponent: FC<any>) => {
    ({ value, onChange, ...restProps }: WIthStateValueWrappedComponentProps<Props, ValueType>): React$1.JSX.Element;
    displayName: string;
};

declare enum HelperTextType {
    Default = "default",
    Error = "error"
}
interface HelperTextProps extends BaseComponentAttributes {
    children: ReactNode;
    type?: HelperTextType;
}

interface LabelProps extends BaseComponentAttributes {
    children: ReactNode;
    htmlFor?: string;
    error?: boolean;
    required?: boolean;
}

declare enum Direction {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
interface BaseInputsListProps<T> extends BaseComponentAriaAttributes {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    direction?: Direction;
    helperTextProps?: HelperTextProps;
    labelProps?: LabelProps;
}

type CheckboxesListFieldItem = Omit<CheckboxFieldProps, 'name' | 'checked'>;
declare enum CheckboxesListFieldAction {
    Check = "check",
    Uncheck = "uncheck"
}
interface CheckboxesListFieldProps extends BaseComponentAttributes {
    id: string;
    name: string;
    onChange?: (value: string[], itemValue: string, action: CheckboxesListFieldAction) => void;
    direction?: Direction;
    helperText?: HelperTextProps['children'];
    helperTextExtra?: Omit<HelperTextProps, 'children' | 'type'>;
    items: CheckboxesListFieldItem[];
    label?: LabelProps['children'];
    labelExtra?: Omit<LabelProps, 'children' | 'error' | 'htmlFor' | 'required'>;
    required?: boolean;
    value?: string[];
}

declare const CheckboxesListField: ({ className, direction, helperText, helperTextExtra, id, items, label, labelExtra, name, onChange, required, value, }: CheckboxesListFieldProps) => React$1.JSX.Element;
declare const CheckboxesListFieldStateful: {
    ({ value, onChange, ...restProps }: WIthStateValueWrappedComponentProps<CheckboxesListFieldProps, string[]>): React$1.JSX.Element;
    displayName: string;
};

interface ChoiceInputLabelProps extends BaseComponentAttributes {
    children: ReactNode;
    htmlFor: string;
}

declare const ChoiceInputLabel: ({ children, htmlFor, className, title }: ChoiceInputLabelProps) => React$1.JSX.Element;

declare enum ItemsContainerMoveActiveFocusDirection {
    Up = "up",
    Down = "down"
}
type GetNextFocusableItemType = (element: HTMLElement, direction: ItemsContainerMoveActiveFocusDirection, { itemsList, search }: {
    itemsList: HTMLUListElement;
    search: HTMLInputElement | null;
}) => HTMLElement | null;

interface BaseDropdownItem {
    id: string;
    label: string;
}
interface ExtraDropdownItemClickParamsType {
    closeDropdown: () => void;
}
interface BaseDropdownProps<T extends BaseDropdownItem> extends BaseComponentAttributes {
    isItemSelected: (item: T) => boolean;
    items: T[];
    children?: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    filterFunction?: (item: T, searchTerm: string) => boolean;
    getItemAttributes?: (item: T) => React.HTMLAttributes<HTMLElement>;
    isEmpty?: boolean;
    getNextFocusableItem?: GetNextFocusableItemType;
    maxVisibleItems?: number;
    onDropdownItemClick: (item: T, extraParams: ExtraDropdownItemClickParamsType) => void;
    renderEmptySelectionInfo?: () => React.ReactNode;
    renderItem?: (item: T) => React.ReactNode;
    renderSelectedItems?: () => React.ReactNode;
    renderSource?: () => React.ReactNode;
}

declare const BaseDropdown: <T extends BaseDropdownItem>({ children, isEmpty, isItemSelected, items, disabled, error, filterFunction, getItemAttributes, getNextFocusableItem, maxVisibleItems, onDropdownItemClick, renderEmptySelectionInfo, renderItem, renderSelectedItems, renderSource, className, }: BaseDropdownProps<T>) => React$1.JSX.Element;

type DropdownSingleInputItem = BaseDropdownItem;
interface DropdownSingleInputProps extends BaseComponentAttributes {
    name: string;
    disabled?: boolean;
    error?: boolean;
    items?: DropdownSingleInputItem[];
    onChange?: (value: string) => void;
    value?: string;
}

declare const DropdownSingleInput: ({ name, className, items, onChange, value, ...restProps }: DropdownSingleInputProps) => React$1.JSX.Element;
declare const DropdownSingleInputStateful: {
    ({ value, onChange, ...restProps }: WIthStateValueWrappedComponentProps<DropdownSingleInputProps, string>): React$1.JSX.Element;
    displayName: string;
};

type DropdownMultiInputItem = BaseDropdownItem;
declare enum DropdownMultiInputAction {
    Check = "check",
    Uncheck = "uncheck"
}
interface DropdownMultiInputProps extends BaseComponentAttributes {
    name: string;
    disabled?: boolean;
    error?: boolean;
    items?: DropdownMultiInputItem[];
    onChange?: (value: string[], itemValue: string, action: DropdownMultiInputAction) => void;
    value?: string[];
}

declare const DropdownMultiInput: ({ name, className, items, onChange, value, ...restProps }: DropdownMultiInputProps) => React$1.JSX.Element;
declare const DropdownMultiInputStateful: {
    ({ value, onChange, ...restProps }: WIthStateValueWrappedComponentProps<DropdownMultiInputProps, string[]>): React$1.JSX.Element;
    displayName: string;
};

declare enum ExpanderType {
    Caret = "caret",
    Chevron = "chevron"
}
interface ExpanderSharedProps {
    onClick?: (isExpanded: boolean) => void;
    isExpanded?: boolean;
    isFocusable?: boolean;
    type: ExpanderType;
}
interface ExpanderWithoutLabelProps extends ExpanderSharedProps {
    collapseLabel?: never;
    expandLabel?: never;
    hasIcon?: true;
}
interface ExpanderWithLabelProps extends ExpanderSharedProps {
    collapseLabel?: string;
    expandLabel?: string;
    hasIcon?: boolean;
}
type ExpanderProps = ExpanderWithoutLabelProps | ExpanderWithLabelProps;

declare const Expander: ({ onClick, type, collapseLabel, expandLabel, hasIcon, isExpanded, isFocusable, }: ExpanderProps) => React$1.JSX.Element;

declare const HelperText: ({ children, className, title, type }: HelperTextProps) => React$1.JSX.Element | null;

declare enum IconSize {
    Tiny = "tiny",
    TinySmall = "tiny-small",
    Small = "small",
    SmallMedium = "small-medium",
    Medium = "medium",
    MediumLarge = "medium-large",
    Large = "large",
    LargeHuge = "large-huge",
    Huge = "huge"
}
interface IconSharedProps {
    className?: string;
    size?: IconSize;
}
interface IconPathProps extends IconSharedProps {
    path: string;
    name?: string;
}
interface IconBuiltinProps extends IconSharedProps {
    path?: never;
    name: string;
}
type IconProps = IconPathProps | IconBuiltinProps;

declare const Icon: ({ path, className, name, size }: IconProps) => React$1.JSX.Element;

declare enum InputTextInputSize {
    Medium = "medium",
    Small = "small"
}
declare const INPUT_TEXT_TYPE_VALUES: ["text", "password", "email", "number", "tel", "search", "url"];
type InputTextInputType = (typeof INPUT_TEXT_TYPE_VALUES)[number];
interface InputTextInputProps extends BaseComponentAriaAttributes {
    name: string;
    onBlur?: React$1.FocusEventHandler<HTMLInputElement>;
    onChange?: (value: string, event?: React$1.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: React$1.FocusEventHandler<HTMLInputElement>;
    onInput?: React$1.InputEventHandler<HTMLInputElement>;
    disabled?: boolean;
    error?: boolean;
    id?: string;
    placeholder?: string;
    processActions?: (actions: ComponentEntryDataType[]) => ComponentEntryDataType[];
    readOnly?: boolean;
    ref?: React$1.Ref<HTMLInputElement>;
    required?: boolean;
    size?: InputTextInputSize;
    type?: InputTextInputType;
    value?: string | number;
}

interface InputTextFieldProps extends BaseComponentAttributes {
    id: string;
    name: InputTextInputProps['name'];
    input?: Omit<InputTextInputProps, 'error' | 'name' | 'onChange' | 'required' | 'value'>;
    helperText?: HelperTextProps['children'];
    helperTextExtra?: Omit<HelperTextProps, 'children' | 'type'>;
    label?: LabelProps['children'];
    labelExtra?: Omit<LabelProps, 'children' | 'error' | 'htmlFor' | 'required'>;
    onChange?: InputTextInputProps['onChange'];
    onValidate?: (isValid: boolean, messages: string[]) => void;
    required?: boolean;
    value?: InputTextInputProps['value'];
}
type InputTextFieldOnChangeArgsType = Parameters<NonNullable<InputTextFieldProps['onChange']>>;
type InputTextFieldValueType = NonNullable<InputTextFieldProps['value']>;

declare const InputTextField: ({ className, helperText, helperTextExtra, id, input, label, labelExtra, name, onChange, onValidate, required, value, }: InputTextFieldProps) => React$1.JSX.Element;
declare const InputTextFieldStateful: {
    ({ value, onChange, ...restProps }: WIthStateValueWrappedComponentProps<InputTextFieldProps, InputTextFieldValueType>): React$1.JSX.Element;
    displayName: string;
};

declare const InputTextInput: ({ name, onBlur, onChange, onFocus, onInput, disabled, error, extraAria, className, id, placeholder, processActions, readOnly, ref, required, size, title, type, value, }: InputTextInputProps) => React$1.JSX.Element;
declare const InputTextInputStateful: {
    ({ value, onChange, ...restProps }: WIthStateValueWrappedComponentProps<InputTextInputProps, string | number>): React$1.JSX.Element;
    displayName: string;
};

declare const Label: ({ children, htmlFor, error, className, required, title }: LabelProps) => React$1.JSX.Element;

type RadioButtonInputProps = Omit<BaseChoiceInputProps, 'type'> & {
    value: string;
};

declare const RadioButtonInput: ({ className, ...restProps }: RadioButtonInputProps) => React$1.JSX.Element;
declare const RadioButtonInputStateful: {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<RadioButtonInputProps>): React$1.JSX.Element;
    displayName: string;
};

interface RadioButtonFieldProps extends RadioButtonInputProps {
    id: string;
    label: ReactNode;
    inputWrapperClassName?: string;
    labelClassName?: string;
}

declare const RadioButtonField: ({ className, inputWrapperClassName, label, labelClassName, ...inputProps }: RadioButtonFieldProps) => React$1.JSX.Element;
declare const RadioButtonFieldStateful: {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<RadioButtonFieldProps>): React$1.JSX.Element;
    displayName: string;
};

type RadioButtonsListFieldItem = Omit<RadioButtonFieldProps, 'name' | 'checked'>;
interface RadioButtonsListFieldProps extends BaseComponentAttributes {
    id: string;
    name: string;
    onChange?: (value: string) => void;
    direction?: Direction;
    helperText?: HelperTextProps['children'];
    helperTextExtra?: Omit<HelperTextProps, 'children' | 'type'>;
    items: RadioButtonsListFieldItem[];
    label?: LabelProps['children'];
    labelExtra?: Omit<LabelProps, 'children' | 'error' | 'htmlFor' | 'required'>;
    required?: boolean;
    value?: string;
}

declare const RadioButtonsListField: ({ className, direction, helperText, helperTextExtra, id, items, label, labelExtra, name, onChange, required, value, }: RadioButtonsListFieldProps) => React$1.JSX.Element;
declare const RadioButtonsListFieldStateful: {
    ({ value, onChange, ...restProps }: WIthStateValueWrappedComponentProps<RadioButtonsListFieldProps, string>): React$1.JSX.Element;
    displayName: string;
};

declare enum TagSize {
    Medium = "medium",
    Small = "small"
}
declare enum TagGhostType {
    SuccessGhost = "success-ghost",
    ErrorGhost = "error-ghost",
    NeutralGhost = "neutral-ghost"
}
declare enum TagType {
    Primary = "primary",
    PrimaryAlt = "primary-alt",
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error",
    Neutral = "neutral",
    IconTag = "icon-tag"
}
interface TagProps extends BaseComponentAttributes {
    children: React.ReactNode;
    type: TagType | TagGhostType;
    icon?: string;
    size?: TagSize;
    isDark?: boolean;
}

declare const Tag: ({ children, className, isDark, icon, size, type }: TagProps) => React$1.JSX.Element;

declare enum ToggleButtonInputSize {
    Small = "small",
    Medium = "medium"
}
type ToggleButtonInputProps = Omit<BaseChoiceInputProps, 'type' | 'error'> & {
    onLabel?: string;
    offLabel?: string;
    onChange?: (checked: boolean) => void;
    size?: ToggleButtonInputSize;
};

interface ToggleButtonFieldProps extends BaseComponentAttributes {
    id: string;
    name: ToggleButtonInputProps['name'];
    checked?: boolean;
    input?: Omit<ToggleButtonInputProps, 'checked' | 'error' | 'name' | 'onChange' | 'required'>;
    helperText?: HelperTextProps['children'];
    helperTextExtra?: Omit<HelperTextProps, 'children' | 'type'>;
    label?: LabelProps['children'];
    labelExtra?: Omit<LabelProps, 'children' | 'error' | 'htmlFor' | 'required'>;
    onChange?: ToggleButtonInputProps['onChange'];
    required?: boolean;
}

declare const ToggleButtonField: ({ checked, className, helperText, helperTextExtra, id, input, label, labelExtra, name, onChange, required, }: ToggleButtonFieldProps) => React$1.JSX.Element;
declare const ToggleButtonFieldStateful: {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<ToggleButtonFieldProps>): React$1.JSX.Element;
    displayName: string;
};

declare const ToggleButtonInput: ({ className, offLabel, onLabel, size, title, ...inputProps }: ToggleButtonInputProps) => React$1.JSX.Element;
declare const ToggleButtonInputStateful: {
    ({ checked, onChange, ...restProps }: WithStateCheckedWrappedComponentProps<ToggleButtonInputProps>): React$1.JSX.Element;
    displayName: string;
};

type GetIconPathType = (iconName: string) => string;
interface AssetsType {
    getIconPath: GetIconPathType;
}
interface AssetsProps {
    children: ReactNode;
    value: AssetsType;
}

declare const AssetsContext: React$1.Context<AssetsType>;
declare const AssetsProvider: ({ children, value }: AssetsProps) => React$1.JSX.Element;

type TranslatorFunction = (translationKey: string, parameters?: Record<string, string>) => string;
interface TranslatorType {
    trans: TranslatorFunction;
}
interface TranslatorProps {
    children: ReactNode;
    value: TranslatorType;
}

declare const TranslatorContext: React$1.Context<TranslatorType>;
declare const TranslatorProvider: ({ children, value }: TranslatorProps) => React$1.JSX.Element;

declare const useGetOrCreateId: (id?: string) => string;

declare const useKeyDown: (key: string[], callback: (event: KeyboardEvent) => void, node: HTMLElement | null) => void;

interface BaseChoiceInputFieldProps extends BaseComponentAriaAttributes {
    children: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    id: string;
    inputWrapperClassName?: string;
    labelClassName?: string;
    renderInput: () => React.ReactNode;
}

declare const BaseChoiceInputField: ({ children, className, disabled, error, id, inputWrapperClassName, labelClassName, renderInput, }: BaseChoiceInputFieldProps) => React$1.JSX.Element;

interface BaseFieldProps extends BaseComponentAttributes {
    children: ReactNode;
    type: string;
    helperText?: HelperTextProps;
    label?: LabelProps;
}

declare const BaseField: ({ children, className, helperText, label, type }: BaseFieldProps) => React$1.JSX.Element;

declare const BASE_INPUT_TYPE_VALUES: ["text", "password", "email", "number", "tel", "search", "url", "checkbox", "radio", "hidden"];
type BaseInputType = (typeof BASE_INPUT_TYPE_VALUES)[number];
interface BaseInputPropsProps extends BaseComponentAttributes {
    name: string;
    disabled?: boolean;
    error?: boolean;
    id?: string;
    ref?: Ref<HTMLInputElement>;
    size?: string;
    value?: string | number;
}
interface BaseInputVisibleProps extends BaseInputPropsProps {
    required?: boolean;
    type?: Exclude<BaseInputType, 'hidden'>;
    extraInputAttrs?: Omit<InputHTMLAttributes<HTMLInputElement>, keyof BaseInputVisibleProps>;
}
interface BaseInputHiddenProps extends BaseInputPropsProps {
    type: 'hidden';
    required?: never;
    extraInputAttrs?: Omit<InputHTMLAttributes<HTMLInputElement>, keyof BaseInputHiddenProps>;
}
type BaseInputProps = BaseInputVisibleProps | BaseInputHiddenProps;

declare const BaseInput: ({ name, disabled, error, className, extraInputAttrs, id, ref, required, size, title, type, value, }: BaseInputProps) => React$1.JSX.Element;

declare const BaseInputsList: <T>({ items, renderItem, className, direction, helperTextProps, labelProps, }: BaseInputsListProps<T>) => React$1.JSX.Element;

declare const validateInput: <T>(value: T, validators: BaseValidator<T>[]) => ValidationResult;

export { Accordion, type AccordionProps, AltRadioInput, type AltRadioInputProps, AltRadioInputStateful, AssetsContext, type AssetsProps, AssetsProvider, type AssetsType, Autosave, type AutosaveProps, AutosaveStatus, BASE_INPUT_TYPE_VALUES, Badge, type BadgeProps, BadgeSize, BadgeVariant, BaseChoiceInput, BaseChoiceInputField, type BaseChoiceInputFieldProps, type BaseChoiceInputProps, BaseDropdown, type BaseDropdownItem, type BaseDropdownProps, BaseField, type BaseFieldProps, BaseInput, type BaseInputProps, type BaseInputType, BaseInputsList, type BaseInputsListProps, Button, type ButtonProps, ButtonSize, ButtonType, CheckboxField, type CheckboxFieldProps, CheckboxFieldStateful, CheckboxInput, type CheckboxInputProps, CheckboxInputStateful, CheckboxesListField, CheckboxesListFieldAction, Direction as CheckboxesListFieldDirection, type CheckboxesListFieldItem, type CheckboxesListFieldProps, CheckboxesListFieldStateful, ChoiceInputLabel, type ChoiceInputLabelProps, Direction, DropdownMultiInput, DropdownMultiInputAction, type DropdownMultiInputItem, type DropdownMultiInputProps, DropdownMultiInputStateful, DropdownSingleInput, type DropdownSingleInputItem, type DropdownSingleInputProps, DropdownSingleInputStateful, Expander, type ExpanderProps, ExpanderType, type ExtraDropdownItemClickParamsType, type GetIconPathType, HelperText, type HelperTextProps, HelperTextType, INPUT_CHOICE_TYPE_VALUES, INPUT_TEXT_TYPE_VALUES, Icon, type IconProps, IconSize, type InputChoiceTypesType, InputTextField, type InputTextFieldOnChangeArgsType, type InputTextFieldProps, InputTextInputSize as InputTextFieldSize, InputTextFieldStateful, type InputTextFieldValueType, InputTextInput, type InputTextInputProps, InputTextInputSize, InputTextInputStateful, type InputTextInputType, Label, type LabelProps, RadioButtonField, type RadioButtonFieldProps, RadioButtonFieldStateful, RadioButtonInput, type RadioButtonInputProps, RadioButtonInputStateful, RadioButtonsListField, Direction as RadioButtonsListFieldDirection, type RadioButtonsListFieldItem, type RadioButtonsListFieldProps, RadioButtonsListFieldStateful, Tag, TagGhostType, type TagProps, TagSize, TagType, ToggleButtonField, type ToggleButtonFieldProps, ToggleButtonInputSize as ToggleButtonFieldSize, ToggleButtonFieldStateful, ToggleButtonInput, type ToggleButtonInputProps, ToggleButtonInputSize, ToggleButtonInputStateful, TranslatorContext, type TranslatorFunction, type TranslatorProps, TranslatorProvider, type TranslatorType, type WIthStateValueWrappedComponentProps, type WithStateCheckedWrappedComponentProps, useGetOrCreateId, useKeyDown, validateInput, withStateChecked, withStateValue };

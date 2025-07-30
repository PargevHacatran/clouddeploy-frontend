export interface IInput {
    name?: string;
    type?: string;
    labelTitle?: React.ReactNode; 
    titleClassName?: string;
    areaClassName?: string;
    className: string;
    placeholder: string;
    value: string;
    addictionalStyles?: object;
    maxLength?: number;
    isMultiline?: boolean;
    onChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;  
}

export const Input = ({ name, type, labelTitle, titleClassName, areaClassName, className, placeholder, value, addictionalStyles, maxLength, isMultiline, onChange, onKeyDown }:IInput) => {
    return (
        <label className={className}>
            <span className={titleClassName}>{ labelTitle }</span>
            {
                isMultiline ?
                    <textarea
                        type={type}
                        className={areaClassName} 
                        name={name}
                        placeholder={placeholder}
                        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
                        onKeyDown={(e:React.KeyboardEvent<HTMLTextAreaElement>) => onKeyDown?.(e)}
                        value={value}
                        style={addictionalStyles}
                        maxLength={maxLength}
                    >
                    </textarea>
                    :
                    <input
                        type={type}
                        className={areaClassName} 
                        name={name}
                        placeholder={placeholder}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                        onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => onKeyDown?.(e)}
                        value={value}
                        style={addictionalStyles}
                        maxLength={maxLength}
                    />
            }
        </label>
    )
}

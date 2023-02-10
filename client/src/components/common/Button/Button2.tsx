import { BaseButton } from "./style/Button";
import { FilledButton, OutLinedButton } from "./style/ButtonStyle";

interface IButtonProps {
theme?: "filled" | "outlined";
text: string;

}

export const Button =(props: IButtonProps)=> {

    const {theme, text} = props;
if (theme === "outlined"){
    return <OutLinedButton>{text}</OutLinedButton>
}else{
return <FilledButton>{text}</FilledButton>
}
}
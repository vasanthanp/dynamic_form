import { fireEvent, getByLabelText, render, screen } from "@testing-library/react";
import Input from "./components/Input/Input";

describe('Input component', () => {

    test('testcase1', () => {
        render(
            <Input 
                type="email"
                label="Enter your email"
                placeholder="Please Enter your email"
                datatestid="email"
            />
        );

        let labelValue = screen.getByText('Enter your email');
        let placeholder = screen.getByPlaceholderText('Please Enter your email');
        let inputEl = screen.getByTestId('email');

        expect(labelValue).toBeTruthy();
        expect(placeholder).toBeTruthy();
        expect(inputEl).toBeInTheDocument();

        fireEvent.focus(inputEl);

        expect(screen.getByTestId('message').textContent).toBe('Invalid Email');
        
        fireEvent.change(inputEl, {target : { value : 'test@gmail'}});
        expect(inputEl.value).toBe('test@gmail');
        expect(screen.getByTestId('message').textContent).toBe('Invalid Email');

        fireEvent.change(inputEl, {target : { value : 'test@gmail.com'}});
        expect(screen.queryByTestId('message')).toBeFalsy();

    })

    test('testcase2', () => {
        render(
            <Input 
                type="password"
                label="Enter your password"
                placeholder="Please Enter your password"
                datatestid="password"
            />
        );

        let inputEl = screen.getByTestId('password');

        expect(inputEl).toBeInTheDocument();

        fireEvent.focus(inputEl);
        console.log(screen.getByTestId('message').textContent);
        expect(screen.getByTestId('message').textContent).toBe('Please Fill the password');
        
        fireEvent.change(inputEl, {target : { value : 'test'}});
        expect(inputEl.value).toBe('test');
        expect(screen.getByTestId('message').textContent).toBe('Password is Weak');

        fireEvent.change(inputEl, {target : { value : 'Test'}});
        expect(screen.getByTestId('message').textContent).toBe('Password is Good');

        fireEvent.change(inputEl, {target : { value : 'Test@123456'}});
        expect(screen.getByTestId('message').textContent).toBe('Password is Very Strong');

        fireEvent.change(inputEl, {target : { value : 'Test@12'}});
        expect(screen.getByTestId('message').textContent).toBe('Password is Very Strong');

        fireEvent.change(inputEl, {target : { value : 'test@gmail.com'}});
        expect(screen.getByTestId('message').textContent).toBe('Password is Good');

    })

    test('testcase3', () => {
        render(
            <Input 
                type="text"
                label="Enter your username"
                placeholder="Please Enter your username"
                datatestid="username"
            />
        );

        let inputEl = screen.getByTestId('username');

        expect(inputEl).toBeInTheDocument();

        fireEvent.focus(inputEl);

        expect(screen.getByTestId('message').textContent).toBe('Please Fill the column');
        
        fireEvent.change(inputEl, {target : { value : 'test'}});
        expect(inputEl.value).toBe('test');
        expect(screen.queryByTestId('message')).toBeFalsy();


    })

})
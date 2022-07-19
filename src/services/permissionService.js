import Swal from 'sweetalert2';

export const askForPermission = async () => {
  const permissionText = `
    <span style="text-align: left; font-size: 0.9rem;"> 
    We can enhance your experience on this site by personalizing the content 
    you view if you agree to let us use web tracking technologies such as 
    cookies that help us to understand how you interact with the site. This 
    information consists of, for example, unique web browsing history, precise 
    geolocation and unique identifiers. if you do not consent, you will not 
    use some of the functionality on this site. <br> 
    We process data as follows: Use precise geolocation data. Store and/or 
    access information on a device. Personalized content and content measurement, 
    audience insights and product development.
    <span>
    `;
  const { value: accept } = await Swal.fire({
    title: 'We Care About Your Privacy',
    html: permissionText,
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder: 'I agree with the terms and conditions',
    confirmButtonText: 'Continue',
  });

  return accept;
};

export const StyledForm = () => {
  return (
    <form action="">
      <label for="username">Username: </label>
      <input type="text" id="username" class="form-input" />
      <br />
      <label for="email">Email: </label>
      <input type="email" id="email" class="form-input" tabindex="1" />
    </form>
  );
};

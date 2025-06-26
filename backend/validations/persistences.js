const registerPersistences = (errors, req) => {
  return {
    rolValue: errors.mapped().id_role ? errors.mapped().id_role.value : req.body.id_role,
    rolError: errors.mapped().id_role ? '*' + errors.mapped().id_role.msg : 'Tipo usuario definido con éxito!!',
    phoneValue: errors.mapped().phone ? errors.mapped().phone.value : req.body.phone,
    phoneError: errors.mapped().phone ? '*' + errors.mapped().phone.msg : 'Número de celular confirmado!!',
    emailValue: errors.mapped().email ? errors.mapped().email.value : req.body.email,
    emailError: errors.mapped().email ? '*' + errors.mapped().email.msg : 'Correo válido!!',
    passValue: errors.mapped().pass ? errors.mapped().pass.value : req.body.pass,
    passError: errors.mapped().pass ? '*' + errors.mapped().pass.msg : 'Password válido!!',
    pass2Value: errors.mapped().pass2 ? errors.mapped().pass2.value : req.body.pass2,
    pass2Error: errors.mapped().pass2 ? '*' + errors.mapped().pass2.msg : 'Password Confirmado!!',
    nameValue: errors.mapped().name ? errors.mapped().name.value : req.body.name,
    nameError: errors.mapped().name ? '*' + errors.mapped().name.msg : 'Nombre válido!!',
    surnameValue: errors.mapped().surname ? errors.mapped().surname.value : req.body.surname,
    surnameError: errors.mapped().surname ? '*' + errors.mapped().surname.msg : 'Apellido válido!!',
    addressValue: errors.mapped().address ? errors.mapped().address.value : req.body.address,
    addressError: errors.mapped().address ?  '*' + errors.mapped().address.msg : 'Dirección válida!!',
    front_documentError: req.files.front_document === undefined || req.files.front_document[0].size > 1000000 ? '*La imagen del documento es obligatoria no mayor a 1 MB' : 'Imagen Subida con exito!!',
    avatarError: req.files.avatar === undefined || req.files.avatar[0].size > 1000000 ? '*Agregue una imagen a su perfil no mayor a 1 MB.' : 'Imagen Subida con exito!!'
  }
}

const updatePersistences = (errors, req) => {
  let percistences = {
    rolValue: errors.mapped().id_role ? errors.mapped().id_role.value : req.body.id_role,
    rolError: errors.mapped().id_role ? '*' + errors.mapped().id_role.msg : 'Tipo usuario definido con éxito!!',
    phoneValue: errors.mapped().phone ? errors.mapped().phone.value : req.body.phone,
    phoneError: errors.mapped().phone ? '*' + errors.mapped().phone.msg : 'Número de celular confirmado!!',
    emailValue: errors.mapped().email ? errors.mapped().email.value : req.body.email,
    emailError: errors.mapped().email ? '*' + errors.mapped().email.msg : 'Correo válido!!',
    passValue: errors.mapped().pass ? errors.mapped().pass.value : req.body.pass,
    passError: errors.mapped().pass ? '*' + errors.mapped().pass.msg : 'Password válido!!',
    pass2Value: errors.mapped().pass2 ? errors.mapped().pass2.value : req.body.pass2,
    pass2Error: errors.mapped().pass2 ? '*' + errors.mapped().pass2.msg : 'Password Confirmado!!',
    nameValue: errors.mapped().name ? errors.mapped().name.value : req.body.name,
    nameError: errors.mapped().name ? '*' + errors.mapped().name.msg : 'Nombre válido!!',
    surnameValue: errors.mapped().surname ? errors.mapped().surname.value : req.body.surname,
    surnameError: errors.mapped().surname ? '*' + errors.mapped().surname.msg : 'Apellido válido!!',
    addressValue: errors.mapped().address ? errors.mapped().address.value : req.body.address,
    addressError: errors.mapped().address ?  '*' + errors.mapped().address.msg : 'Dirección válida!!'
  }
  if (req.file !== undefined) {
    percistences.avatarError = req.file.size > 1000000 ? '*Agregue una imagen a su perfil no mayor a 1 MB.' : 'Imagen Subida con exito!!'
  }
  return percistences;
}

export { registerPersistences, updatePersistences };
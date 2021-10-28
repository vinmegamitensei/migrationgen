const csm = {
  caseActions: {
    changeStatus: {
      activate: {
        confirm: "Ativar",
        subtitle: "Você agora poderá associar esta ação a casos",
        cancel: "Cancelar",
        title: "Ativar esta Ação",
      },
      inactivate: {
        confirm: "Inativar",
        title: "Inativar esta Ação",
        cancel: "Cancelar",
        subtitle: "Você não poderá mais associar esta ação a casos",
      },
      activateBatch: {
        cancel: "Cancelar",
        title: "Ativar todas as ações selecionadas",
        confirm: "Alterar Status",
        subtitle: "Você agora poderá associar estas ações a casos",
      },
      title: "Alterar Status",
      options: {
        inactivate: "Inativar Registros",
        activate: "Ativar Registros",
      },
      inactivateBatch: {
        title: "Inativar todas as ações selecionadas",
        cancel: "Cancelar",
        subtitle: "Você não poderá mais associar estas ações a casos",
        confirm: "Alterar Status",
      },
    },
    delete: {
      error: "Erro ao deletar a ação.",
      success: "Ação deletada com sucesso!",
    },
    activate: {
      error: "Erro ao ativar a ação",
      success: "Ação ativada com sucesso",
    },
    inactive: "Inativo",
    update: {
      success: "Ação editada com sucesso!",
      error: "Erro ao atualizar a ação.",
    },
    pagination: {
      labelRowsPerPage: "Linhas por Página:",
      backIconButtonText: "Página Anterior",
      labelDisplayedRows: {
        of: "de",
        moreThan: "mais que",
      },
      nextIconButtonText: "Próxima Página",
    },
    notAllowed: {
      update: "Você não tem permissão para executar esta ação",
      delete: "Você não tem permissão para executar esta ação",
      create: "Você não tem permissão para executar esta ação",
    },
    cellsHead: {
      inactivateBatch: "Desativar Ações",
      name: "Nome da Ação",
      inactivate: "Desativar Ação",
      delete: "Deletar Ação",
      edit: "Editar Ação",
      description: "Descrição",
      actions: "Ações",
      activate: "Ativar",
      easyId: "ID",
      active: "Ativo",
      inactive: "Inativo",
      status: "Status",
      businessUnit: "Unid. de Negócio",
    },
    tableHeader: {
      search: "Busque pelo Nome da Ação",
      deleteModal: {
        singleTitle: "Deletar esta Ação?",
        subtitle:
          "Você perderá todas as suas configurações e isso não pode ser desfeito!",
        batchTitle: "Deletar estas Ações?",
        cancel: "Cancelar",
        confirm: "Deletar",
      },
      deleteBatch: "Deletar Selecionado",
      title: "Ações",
      add: "Adicionar Ação de Caso",
    },
    form: {
      crudLog: {
        createdAt: "Criado em",
        by: "por",
        lastModifiedAt: "Última alteração em",
      },
      nameMinLengthMessage: "O nome da ação deve ter pelo menos 3 caracteres",
      clearAllButton: "Limpar Campos",
      nameLabel: "Nome da Ação",
      saveActionButton: "Salvar Alterações",
      nameDuplicatedMessage: "Este nome já está em uso",
      createActionButton: "Adicionar Ação",
      cancelButton: "Cancelar",
      requiredFields: "* Campos Obrigatórios",
      businessUnitLabel: "Selecione a Unidade de Negócio",
      deleteButton: "Deletar",
      maxLengthMessage: "Você atingiu o limite de caracteres",
      dispositionCodeLabel: "Código de Disposição",
      confirmDeletion: "Você tem certeza disso? Todos os dados serão excluídos",
      nameMaxLengthMessage: "Você atingiu o limite de caracteres",
      businessUnitRequiredMessage: "Este campo é obrigatório",
      descriptionMaxLengthMessage: "Você pode inserir até 255 caracteres",
      nameRequiredMessage: "Este campo é obrigatório",
      descriptionLabel: "Descrição",
      invalidCharacterMessage:
        "Desulpe, caracteres especiais não são suportados",
    },
    emptyState: {
      title: "Perdemos suas coordenadas ...",
      subtitle: "Nenhum resultado corresponde aos seus critérios de pesquisa.",
    },
    create: {
      error: "Erro ao adicionar a ação.",
      success: "Ação adicionada com sucesso!",
    },
    header: {
      create: "Criar nova Ação",
      description:
        "Add actions by business unit responsible for the progression of a case, changing the statuses as the service is conducted until its conclusion",
      subtitle: "Costumer Service",
      title: "Ações de gerenciamento de caso",
    },
    active: "Ativo",
    crud: {
      delete: "Deletar",
      update: "Editar",
      deleteBatch: "Deletar Selecionado",
      create: "Adicionar Ação",
    },
    drawerTitleUpdate: "Ação",
    inactivate: {
      error: "Erro ao inativar a ação",
      success: "Ação inativada com sucesso",
    },
    inactivateBatch: {
      success: "Ação inativada com sucesso",
      error: "Erro ao inativar a ação",
    },
    noRecord: {
      title: "Crie sua primeira Ação!",
      actionButtonText: "Criar sua primeira Ação",
      subtitle: "Nenhuma ação foi realizada ainda.",
    },
    drawerTitleCreate: "Criar Nova Ação",
  },
  mailing: {
    details: {
      update: {
        error: "Erro ao atualizar mailing",
        success: "Mailing atualizado com sucesso",
      },
      upload: {
        dropperZone: {
          title: "Clique ou solte um arquivo",
          subtitle: "Apenas arquivos csv e txt com no máximo 50mb",
          dropHover: "Solte o arquivo aqui",
        },
        uploadFiles: {
          processed: "Processado",
          error: "Erro",
          completed: "Completado",
        },
        header: {
          description:
            "Solte ou selecione um arquivo txt ou csv para importar seus dados",
          title: "Carregue um arquivo",
        },
      },
    },
    mapping: {
      columnNamePlaceholder: "Definir nome da coluna",
      description: "Mapeie suas colunas com os campos do sistema",
      title: "Mapeamento",
      mapToPlaceholder: "Selecione um campo",
      add: "Adicionar nova linha",
      remove: "Deletar Linha",
      mapTo: "Mapear para",
      columnName: "Nome da Coluna",
    },
    steps: {
      mapping: "Mapeamento",
      upload: "Carregar",
      ruleIntegration: "Integração de Regras",
      conclusion: "Conclusão",
    },
    footer: {
      nextStep: "Próximo",
      back: "Voltar",
      finish: "Concluir Configuração",
      cancel: "Cancelar",
    },
  },
  actionsForms: {
    validation: {
      matches: "Desulpe, caracteres especiais não são suportados",
      editSuccess: "Formulário editado com sucesso!",
      min: "O Nome do Formulário de Ações deve ter pelo menos 3 caracteres",
      createSuccess: "Formulário criado com sucesso!",
      createError: "Não foi possível criar o formulário!",
      editError: "Não foi possível editar o formulário!",
      required: "Este campo é obrigatório",
    },
    tableHeader: {
      title: "Formulários",
      deleteModal: {
        cancel: "Cancelar",
        confirm: "Deletar",
        singleTitle: "Deletar este Formulário de Ações?",
        batchTitle: "Deletar estes Formulário(s) de Ações?",
        subtitle:
          "Todas as configurações serão perdidas e isto não poderá ser revertido!",
      },
      add: "Novo Formulário",
      deleteBatch: "Deletar Selecionado(s)",
      search: "Buscar por qualquer formulário",
    },
    pagination: {
      labelRowsPerPage: "Linhas por Página:",
      labelDisplayedRows: {
        of: "de",
      },
      nextIconButtonText: "Próxima página",
      backIconButtonText: "Página anterior",
    },
    footerButtons: {
      footerButtonsBack: "Voltar",
      footerButtonsCancel: "Cancelar",
    },
    basicData: {
      selectBUTitle: "Selecione uma Unidade de Negócio",
      selectBULabel: "Unidade de Negócio",
      fieldNameLabel: "Nome do Formulário",
      fieldNameTitle: "Crie um nome para este formulário",
    },
    cellsHead: {
      actions: "Ações",
      delete: "Deletar Formulário",
      name: "Nome do formulário",
      businessUnit: "Unidade de Negócio",
      linkedActions: "Ações Vinculadas",
      edit: "Editar Formulário",
    },
    header: {
      subtitle: "Atendimento ao Consumidor",
      title: "Formulários de Ações",
      description: "Crie formulários que são acionados por uma ação",
      create: "Criar Novo Formulário",
    },
    actionFormButtonLabels: {
      stepOne: "Configurar Formulário",
      stepThree: "Salvar fomulário",
      stepTwo: "Vincular Ações",
    },
    configForm: {
      fieldDefaultTitle: "Campos Padrões",
      shortSize: "Curto",
      fields: {
        sizeLabel: "Tamanho do Texto:",
        shortSize: "Curto",
        longSize: "Longo",
      },
      searchTitle: "Campos Disponíveis",
      longSize: "Longo",
      sizeLabel: "Tamanho do Texto:",
      searchPlaceholder: "Busque um Campo",
      fieldCustomTitle: "Campos Personalizados",
      noRecordTitle: "Selecione um campo disponível",
      noRecordSubtitle: "e comece a criar seu formulário agora!",
    },
    bindAction: {
      buttonUnbindAll: "Desvincular Tudo",
      buttonUnbind: "Desvincular",
      search: "Buscar por ação",
      emptyRight: "Nenhuma ação vinculada.",
      emptyLeft: "Nenhuma ação para vincular.",
      TransferListLeftTitle: "Ações disponíveis",
      buttonBindAll: "Vincular Tudo",
      notFound: "Nenhuma ação encontrada.",
      TransferListRightTitle: "Vinculadas a este formulário",
      buttonBind: "Vincular",
    },
    actionFormSteps: {
      stepOne: "Informações Básicas",
      stepThree: "Vincular Ações",
      stepTwo: "Configurações do Formulário",
    },
    deleteBatch: {
      success: "Formulário(s) de Ações deletado(s) com sucesso!",
      error: "Erro ao deletar a Formulário(s) de Ações",
    },
    actionFormHeaderLabels: {
      stepThree: {
        title: "Vincular Ações",
        description:
          "Crie formulários a partir de campos selecionados na barra lateral",
      },
      stepOne: {
        title: "Informações Básicas",
        description:
          "Nomeie seu formulário e vincule-o a uma Unidade de Negócio",
      },
      stepTwo: {
        title: "Configurações do Formulário",
        description:
          "Crie formulários a partir de campos selecionados na barra lateral",
      },
    },
    modal: {
      save: {
        subtitle:
          "Você vinculou múltiplas ações a este formulário que serão afetadas com esta alteração. Deseja continuar?",
        button: {
          save: "Salvar",
          cancel: "Cancelar ",
        },
        title: "Deseja salvar alterações?",
      },
    },
    delete: {
      error: "Erro ao deletar a Formulário de Ações",
      success: "Formulário de Ações deletado com sucesso!",
    },
    emptyState: {
      title: "Crie seu primeiro Formulário de Ações!",
      subtitle: "Nenhum formulário foi criado ainda",
    },
  },
  caseReason: {
    form: {
      nameMinLengthMessage:
        "O Nome da Razão do Caso deve ter pelo menos 3 caracteres",
      crudLog: {
        lastModifiedAt: "Modificado em",
        by: "por",
        createdAt: "Críado em",
      },
      nameLabel: "Nome Razão do Caso",
      clearAllButton: "Limpar Campos",
      createStatusButton: "Adicionar Razão",
      createReasonButton: "Adicionar Razão",
      saveStatusButton: "Salvar Alterações",
      footerButtons: {
        confirmDeletion:
          "Você tem certeza disso? Todos os dados serão excluídos",
      },
      invalidCharacterMessage:
        "Desculpe, caracteres especiais não são suportados",
      caseTypeCloseReason: "Fechamento",
      deleteButton: "Deletar",
      requiredFields: "*Campos obrigatórios",
      descriptionLabel: "Descrição",
      cancelButton: "Cancelar",
      requiredMessage: "Campo obrigatório",
      caseTypeOpenReason: "Abertura",
    },
    tableHeader: {
      deleteModal: {
        subtitle:
          "Você perderá todas as suas configurações e isso não pode ser desfeito!",
        confirm: "Deletar",
        cancel: "Cancel",
        singleTitle: "Deletar esta Razão?",
        batchTitle: "Deletar estas Ações",
      },
      add: "Adicionar Razão do Caso",
      title: "Razão do Caso",
      caseType: "Tipo de caso",
      casetype: "Tipo de caso",
      search: "Busque pelo Nome da Razão",
      description: "Nome",
      name: "Nome",
      actions: "Ações",
      type: "Tipo",
      deleteBatch: "Deletar Selecionado",
      easyId: "ID",
    },
    noRecord: {
      title: "Crie seu primeiro registro!",
      action: "Criar nova razão",
      subtitle: "Nenhum registro foi criado ainda.",
    },
    cellsHead: {
      name: "Nome da Razão",
      caseReasonType: "Tipo",
      description: "Descrição",
      actions: "Ações",
      casetype: "Tipo de Caso",
      status: "Status",
      edit: "Editar Razão do Caso",
      caseType: "Tipo de caso",
      delete: "Deletar Razão do Caso",
      type: "Tipo",
      easyId: "ID",
    },
    snackbar: {
      delete: {
        success: "Razão deletada com sucesso!",
        error: "Erro ao deletar a Razão.",
        erro: "Erro ao deletar razão",
      },
      edit: {
        error: "Erro ao editar razão!",
        success: "Razão editada com sucesso!",
      },
      create: {
        success: "Razão adicionada com sucesso!",
        error: "Erro ao criar razão!",
      },
    },
    closing: "Fechamento",
    pagination: {
      labelRowsPerPage: "Linhas por página",
      labelDisplayedRows: {
        of: "de",
      },
    },
    changeStatus: {
      inactivateBatch: {
        cancel: "Cancelar",
        title: "Inativar todas as Razões do caso selecionadas",
        confirm: "Alterar Status",
        subtitle:
          "Você não poderá mais aplicar estas razões selecionadas a casos",
      },
      activate: {
        subtitle: "Você agora poderá associar esta razão a casos",
        confirm: "Ativar",
        cancel: "Cancelar",
        title: "Ativar esta razão",
      },
      inactivate: {
        subtitle: "Você não poderá mais associar esta razão a casos",
        cancel: "Cancelar",
        title: "Inativar esta razão",
        confirm: "Inativar",
      },
      options: {
        inactivate: "Inativar registros",
      },
      title: "Alterar Status",
    },
    emptyState: {
      title: "Perdemos suas coordenadas ...",
      subtitle: "Nenhum resultado corresponde aos seus critérios de pesquisa.",
    },
    active: "Ativo",
    from: {
      caseTypeLabel: "Tipo de Caso",
      caseReasonsTypeLabel: "Tipo",
      caseReasonTypeLabel: "Tipo",
    },
    activate: {
      error: "Erro ao ativar razão!",
      success: "Razão ativada com sucesso!",
    },
    notAllowed: {
      create: "Criar nova razão de casos",
    },
    drawerTitleCreate: "Criar Nova Razão",
    inactivate: {
      success: "Razão inativada com sucesso!",
      error: "Erro ao inativar razão!",
    },
    header: {
      create: "Criar nova razão de casos",
      subtitle: "Serviço ao Consumidor",
      description: "Monitore a razão dos casos nas suas operações",
      title: "Crie razões para gerenciar seus casos",
    },
    drawerTitleUpdate: "Razão do Caso",
    opening: "Abertura",
    inactivateBatch: {
      error: "Erro ao inativar razão!",
      success: "Razão inativada com sucesso!",
    },
    inactive: "Inativo",
  },
  agentStatus: {
    cellsHead: {
      businessUnit: "Unidade de Negócio",
      agentStatusCode: "Código de Status",
      edit: "Editar Status do Agente",
      description: "Descrição",
      status: "Status",
      actions: "Ações",
      name: "Nome do Status",
      delete: "Deletar Status do Agente",
    },
    form: {
      clearAllButton: "Limpar",
      nameMinLengthMessage:
        "O Nome do Status de Agente deve ter pelo menos 3 caracteres",
      agentStatusCodeLabel: "Código de Status de Agente",
      crudLog: {
        createdAt: "Críado em",
        createdBy: "por",
        lastModifiedAt: "Modificado em",
        lastModifiedBy: "por",
      },
      descriptionLabel: "Descrição",
      footerButtons: {
        confirmDeletion:
          "Você tem certeza disso? Todos os dados serão apagados",
      },
      nameRequiredMessage: "Campo Obrigatório",
      requiredMessage: "Campo Obrigatório",
      nameLabel: "Nome do Status de Agente",
      createStatusButton: "Adicionar Status",
      nameDuplicatedMessage: "Este nome já está em uso",
      businessUnitRequiredMessage: "Campo Obrigatório",
      descriptionMaxLengthMessage: "Você atingiu o limite de caracteres",
      nameMaxLengthMessage: "Você atingiu o limite de caracteres",
      invalidCharacterMessage:
        "Desulpe, caracteres especiais não são suportados",
      businessUnitLabel: "Selecione a Unidade de Negócio",
      agentStatusCodeDuplicatedMessage: "Este código já está em uso",
      deleteButton: "Deletar",
      requiredFields: "* Campos Obrigatórios",
      agentStatusCodeRequiredMessage: "Campo Obrigatório",
      saveStatusButton: "Salvar",
      cancelButton: "Cancelar",
      onlyNumbersMessage: "Você pode usar apenas números neste código",
    },
    snackbar: {
      create: {
        success: "Status adicionado com sucesso!",
      },
      edit: {
        success: "Status editado com sucesso!",
      },
      delete: {
        success: "Status do agente deletado com sucesso!",
        error: "Erro ao deletar status do agente.",
      },
      deleteBatch: {
        success: "Status do agente deletado com sucesso!",
        error: "Erro ao deletar status do agente.",
      },
    },
    noRecord: {
      subtitle: "Nenhum registro foi criado ainda.",
      title: "Crie seu primeiro registro!",
      actionButtonText: "Crie seu primeiro status de agente",
    },
    changeStatus: {
      options: {
        inactivate: "Inativar Registros",
        activate: "Ativar Registros",
      },
      inactivate: {
        cancel: "Cancelar",
        title: "Inativar Status do Agente",
        confirm: "Inativar",
        subtitle: "Você não poderá mais aplicar este status a agentes",
      },
      activateBatch: {
        subtitle:
          "Todos os status selecionados poderão ser aplicados a agentes a partir de agora",
        confirm: "Alterar Status",
        title: "Ativar todos Status do Agente selecionados",
        cancel: "Cancelar",
      },
      title: "Alterar Status",
      activate: {
        cancel: "Cancelar",
        confirm: "Ativar",
        subtitle: "Este status poderá ser aplicado a agentes a partir de agora",
        title: "Ativar Status do Agente",
      },
      inactivateBatch: {
        cancel: "Cancelar",
        subtitle:
          "Você não poderá mais aplicar estes status selecionados a agentes",
        title: "Inativar todos Status do Agente selecionados",
        confirm: "Alterar Status",
      },
    },
    active: "Ativo",
    pagination: {
      nextIconButtonText: "Próxima Página",
      labelDisplayedRows: {
        of: "de",
        moreThan: "mais que",
      },
      backIconButtonText: "Página Anterior",
      labelRowsPerPage: "Linhas por Página:",
    },
    emptyState: {
      subtitle: "Nenhum registro foi criado ainda.",
      title: "Crie seu primeiro registro!",
    },
    notAllowed: {
      create: "Você não tem permissão para executar esta ação",
      delete: "Você não tem permissão para executar esta ação",
      update: "Você não tem permissão para executar esta ação",
    },
    header: {
      title: "Monitore o status do seu agente",
      description:
        "Crie rótulos para os seus operadores afim de identificar seus status nas operações",
      subtitle: "Costumer Service",
      create: "Criar novo Status de Agente",
    },
    tableHeader: {
      add: "Adicionar Status de Agente",
      deleteModal: {
        subtitle:
          "Você perderá todas suas configuração e não poderá ser desfeito!",
        confirm: "Deletar",
        batchTitle: "Deletar estes Status de Agente?",
        singleTitle: "Deletar este Status de Agente?",
        cancel: "Cancelar",
      },
      title: "Status do Agente",
      search: "Busque pelo Nome do Status",
      deleteBatch: "Deletar Selecionados",
    },
    inactive: "Inativo",
    inactivate: {
      success: "Status do Agente inativado com sucesso",
      error: "Erro ao inativar o status do agente",
    },
    crud: {
      update: "Status do Agente",
      create: "Crie um Status de Agente",
    },
    activate: {
      error: "Erro ao ativar o status do agente",
      success: "Status do Agente ativado com sucesso",
    },
    drawerTitleCreate: "Crie um Status de agente",
    inactivateBatch: {
      error: "Erro ao inativar o status do agente",
      success: "Status do Agente inativado com sucesso",
    },
    drawerTitleUpdate: "Status do Agente",
  },
  teams: {
    feedback: {
      edit: {
        success: "Equipe editada com sucesso!",
        error: "Não foi possível editar a equipe",
      },
      delete: {
        error: "Não foi possível deletar a equipe",
        success: "Equipe deletada com sucesso!",
      },
      deleteBatch: {
        error: "Não foi possível deletar as equipes",
        success: "Todas as equipes deletadas com sucesso!",
      },
      changeStatus: {
        error: "Não foi possível alterar os status",
        success: "Todos os status foram alterados!",
      },
      activate: {
        success: "Equipe ativada com sucesso!",
        error: "Não foi possível ativar a equipe",
      },
      inactivate: {
        error: "Não foi possível inativar a equipe",
        success: "Equipe inativada com sucesso!",
      },
      create: {
        success: "Equipe adicionada com sucesso!",
        error: "Não foi possível adicionar a equipe",
      },
    },
    drawer: {
      selectBU: "Selecionar Unidade de Negócio",
      mustAddTeamMembers: "Você precisa adicionar Membros na Equipe",
      clear: "Limpar Tudo",
      lastModifiedAtMSG: "Editado por último em",
      minMembers:
        "A unidade de negócio deve ter pelo menos dois usuários registrados",
      mustSelectPermission: "Você precisa selecionar pelo menos uma permissão",
      createdAtMSG: "Criado em",
      add: "Adicionar Equipe",
      addTeamLeader: "Adicionar Líder da Equipe",
      addSuccess: "Equipe adicionada com sucesso!",
      edit: "Editar Equipe",
      notFoundPermission:
        "Nenhum resultado encontrado com {{permissionValue}}. Tente novamento ou vá em Grupos de Permissão se quiser adicionar um novo.",
      mustSelectTeamLeader: "Você precisa selecionar um Líder para a Equipe",
      givePermissions: "Dar Permissões",
      notFoundBU: "Resultados não encontrados",
      addTeamMembers: "Adicionar Membros da Equipe",
      duplicatedTeam:
        "Já existe uma Equipe chamada {{teamName}}. Tente novamente.",
      save: "Salvar Alterações",
      byMSG: "por",
      teamName: "Nome da Equipe",
      mustSelectBU: "Você deve selecionar uma Unidade de Negócio.",
      delete: "Deletar",
      deleteConfirmation:
        "Você tem certeza disso? Todos os dados serão excluídos",
      lastModified: "Editado por último em {{date}} {{time}} por {{user}}",
      uniquePermissions: "Permissões Únicas",
      memberWithTwoTeamsMSG:
        "Se você confirmar, {{count}} Membros da Equipe serão movidos de suas equipes para essa aqui.",
      permissionGroups: "Grupos de Permissão",
      cancel: "Cancelar",
      notFoundMembers: "Resultados não encontrados",
      createdAt: "Criado em {{date}} {{time}} por {{user}}",
      editSuccess: "Equipe editada com sucesso!",
      minCharacters: "Nome deve conter pelo menos 3 caracteres.",
    },
    crud: {
      deleteModal: {
        single: {
          cancel: "Cancelar",
          subtitle:
            "Você perderá todas as sua configurações e isto não poderá ser desfeito!",
          confirm: "Deletar",
          title: "Deletar esta equipe",
        },
        batch: {
          cancel: "Cancelar",
          subtitle:
            "Você perderá todas as sua configurações e isto não poderá ser desfeito!",
          confirm: "Deletar",
          title: "Deletar estas equipes",
        },
      },
      status: {
        inactvBatch: {
          sub: "Usuários dessas equipes não poderão executar diversas ações.",
          confirm: "Alterar Status",
          title: "Inativar todas as equipes selecionadas?",
          cancel: "Cancelar",
        },
        actv: {
          confirm: "Ativar",
          title: "Ativar esta equipe?",
          sub: "Agora usuários dessa equipe poderão executar diversas ações.",
          cancel: "Cancelar",
        },
        actBatch: {
          sub: "Agora usuários dessas equipes poderão executar diversas ações.",
          confirm: "Alterar Status",
          title: "Ativar todas as equipes selecionadas?",
          cancel: "Cancelar",
        },
        inactv: {
          cancel: "Cancelar",
          title: "Inativar esta equipe?",
          confirm: "Inativar",
          sub: "Usuários dessa equipe não poderão executar diversas ações.",
        },
        options: {
          actv: "Ativar Registros",
          inactv: "Inativar Registros",
        },
        title: "Alterar Status",
      },
      changeStatus: "Alterar Status",
      notAllowed: {
        update: "Você não tem permissão para executar esta ação",
        create: "Você não tem permissão para executar esta ação",
        delete: "Você não tem permissão para executar esta ação",
      },
      deleteBatch: "Deletar Selecionados",
      create: "Adicionar Equipe",
      delete: "Deletar",
      update: "Editar",
    },
    header: {
      title: "Equipes",
      create: "Adicionar Equipe",
      description: "Crie e gerencie equipes com vários usuários e permissões.",
      subtitle: "Costumer Service",
    },
    cellsHead: {
      status: "Status",
      active: "Ativo",
      members: "Membros",
      actions: "Ações",
      businessUnit: "Unidade de Negócio",
      name: "Nome da Equipe",
      inactive: "Inativo",
    },
    tableHeader: {
      search: "Busque pelo Nome da Equipe",
      order: {
        title: "Ordenar por",
        updated: "Atualizado por último",
        newest: "Mais recente",
        alphabetical: "Ordem alfabética",
      },
      sort: {
        newest: "Mais Recente",
        updated: "Atualizado Recentemente",
        alpha: "Ordem Alfabética",
      },
      title: "Equipes",
      add: "Adicionar Equipe",
    },
    pagination: {
      labelDisplayedRows: {
        of: "de",
        moreThan: "mais de",
      },
      nextIconButtonText: "Próxima Página",
      backIconButtonText: "Página Anterior",
      labelRowsPerPage: "Linhas por Página:",
    },
    noRecord: {
      actionButtonText: "Criae sua primeira equipe",
      title: "Crie sua primeira equipe!",
      subtitle: "Nenhuma equipe foi criada ainda.",
    },
    emptyState: {
      title: "Nós perdemos suas coordenadas...",
      subtitle: "Nenhum resultado corresponde ao que você buscou.",
    },
  },
  management: {
    filter: {
      timeInStatus: "Tempo no status:",
      equalsTo: "É igual a",
      status: "Status:",
      caseAttended: "Casos atendidos:",
      applyFilter: "Filtrar",
      clear: "Limpar",
      greaterThan: "É maior que",
      agent: "Agente:",
      lessThan: "É menor que",
      title: "Filtros",
    },
    cases: "Casos",
    header: {
      title: "Gerenciamento",
      select: {
        bu: "Unidade de Negócio",
        team: "Equipe",
      },
      description: "Acompanhe o desempenho de toda a sua unidade de negócio.",
    },
    agents: "Agentes",
    overview: "Visão Geral",
  },
  caseOrigin: {
    changeStatus: {
      options: {
        inactivate: "Inativar Registros",
        activate: "Ativar Registros",
      },
      inactivateBatch: {
        cancel: "Cancelar",
        title: "Inativar todas as Origem de casos selecionados",
        confirm: "Alterar Status",
        subtitle: "Você não poderá mais vincular estas origens a casos",
      },
      activateBatch: {
        cancel: "Cancelar",
        title: "Ativar todas as Origem de casos selecionados",
        subtitle: "Você agora poderá vincular estas origens a casos",
        confirm: "Alterar Status",
      },
      activate: {
        subtitle: "Você agora poderá vincular esta origem a casos",
        cancel: "Cancelar",
        title: "Ativar Origem do Caso",
        confirm: "Ativar",
      },
      inactivate: {
        subtitle: "Você não poderá mais vincular esta origem a casos",
        confirm: "Inativar",
        title: "Inativar Origem do Caso",
        cancel: "Cancelar",
      },
      title: "Alterar Status",
    },
    form: {
      deleteButton: "Deletar",
      saveStatusButton: "Salvar",
      requiredFields: "* Campos Obrigatórios",
      nameRequiredMessage: "Campo Obrigatório",
      cancelButton: "Cancelar",
      nameLabel: "Nome da Origem do Caso",
      descriptionLabel: "Descrição",
      nameMinLengthMessage:
        "O Nome da Origem de Caso deve ter pelo menos 3 caracteres",
      businessUnitRequiredMessage: "Campo Obrigatório",
      footerButtons: {
        confirmDeletion:
          "Você tem certeza disso? Todos os dados serão apagados",
      },
      nameMaxLengthMessage: "Você atingiu o limite de caracteres",
      invalidCharacterMessage:
        "Desulpe, caracteres especiais não são suportados",
      requiredMessage: "Campo Obrigatório",
      businessUnitLabel: "Selecione a Unidade de Negócio",
      crudLog: {
        lastModifiedBy: "por",
        lastModifiedAt: "Modificado em",
        createdBy: "por",
        by: "por",
        createdAt: "Criado em",
      },
      clearAllButton: "Limpar",
      descriptionMaxLengthMessage: "Você atingiu o limite de caracteres",
      nameDuplicatedMessage:
        "Este nome já está associado a esta unidade de negócio",
      createStatusButton: "Adicionar Origem",
    },
    inactivate: {
      error: "Erro ao inativar a origem do caso",
      success: "Origem do caso inativada com sucesso",
    },
    tableHeader: {
      deleteModal: {
        subtitle:
          "Você perderá todas suas configuração e não poderá ser desfeito!",
        cancel: "Cancelar",
        singleTitle: "Deletar esta Origem de Caso?",
        confirm: "Deletar",
        batchTitle: "Deletar estas Origens de Caso?",
      },
      add: "Adicionar Origem de Caso",
      deleteBatch: "Deletar Selecionados",
      title: "Origem do Caso",
      search: "Busque pelo Nome da Origem",
    },
    snackbar: {
      deleteBatch: {
        success: "Origem do caso deletada com sucesso!",
        error: "Erro ao deletar origem do caso.",
      },
      delete: {
        error: "Erro ao deletar origem do caso.",
        success: "Origem do caso deletada com sucesso!",
      },
      edit: {
        success: "Origem editada com sucesso!",
      },
      create: {
        success: "Origem adicionada com sucesso!",
      },
    },
    activate: {
      success: "Origem do caso ativada com sucesso",
      error: "Erro ao ativar a origem do caso",
    },
    drawerTitleUpdate: "Origem do Caso",
    header: {
      title: "Identifique a origem dos seus casos",
      description: "Monitore a origem dos casos nas suas operações",
      subtitle: "Costumer Service",
      create: "Criar nova Origem de Caso",
    },
    emptyState: {
      title: "Crie seu primeiro registro!",
      subtitle: "Nenhum registro foi criado ainda.",
    },
    inactive: "Inativo",
    cellsHead: {
      status: "Status",
      description: "Descrição",
      businessUnit: "Unidade de Negócio",
      name: "Nome da Origem",
      actions: "Ações",
      easyId: "ID",
    },
    notAllowed: {
      update: "Você não tem permissão para executar esta ação",
      delete: "Você não tem permissão para executar esta ação",
      create: "Você não tem permissão para executar esta ação",
    },
    inactivateBatch: {
      success: "Origem do caso inativada com sucesso",
      error: "Erro ao inativar a origem do caso",
    },
    noRecord: {
      subtitle: "Nenhum registro foi criado ainda.",
      action: "Crie sua primeira origem de caso",
      actionButtonText: "Crie sua primeira origem de caso",
      title: "Crie seu primeiro registro!",
    },
    active: "Ativo",
    crud: {
      create: "Adicionar Origem de Caso",
      delete: "Deletar Origem de Caso",
      update: "Editar Origem de Caso",
    },
    pagination: {
      backIconButtonText: "Página Anterior",
      labelDisplayedRows: {
        of: "de",
        moreThan: "mais que",
      },
      nextIconButtonText: "Próxima Página",
      labelRowsPerPage: "Linhas por Página:",
    },
    drawerTitleCreate: "Crie uma Origem de Caso",
  },
  caseStatus: {
    form: {
      maxLengthMessage: "Você atingiu o limite de caracteres",
      endsCaseMessage: "Marque se este status finalizar um caso",
      saveStatusButton: "Salvar ",
      deleteButton: "Deletar",
      crudLog: {
        by: "por",
        createdAt: "Criado em",
        lastModifiedAt: "Modificado em",
      },
      createStatusButton: "Adicionar Status",
      invalidCharacterMessage:
        "Desculpe, caracteres especiais não são suportados",
      nameMinLengthMessage:
        "O Nome do Status de Caso deve ter pelo menos 3 caracteres",
      businessUnitLabel: "Selecione a Unidade de Negócio",
      clearAllButton: "Limpar Tudo",
      requiredMessage: "Campos Obrigatório",
      descriptionLabel: "Descrição",
      requiredFields: "* Campos Obrigatórios",
      nameLabel: "Nome do Status de Caso",
      footerButtons: {
        confirmDeletion:
          "Você tem certeza disso? Todos os dados serão apagados",
      },
      cancelButton: "Cancelar",
      nameDuplicatedMessage: "Este nome já está em uso",
    },
    tableHeader: {
      search: "Busque pelo Nome do Status",
      sort: {
        newest: "Novo",
        lastUpdate: "Atualizado Recentemente",
        alpha: "Ordem Alfabética",
      },
      deleteModal: {
        singleTitle: "Deletar este Status de Caso?",
        subtitle:
          "Você perderá todas suas configuração e não poderá ser desfeito!",
        batchTitle: "Deletar estes Status de Caso?",
        cancel: "Cancelar",
        confirm: "Deletar",
      },
      deleteBatch: "Deletar selecionados",
      title: "Status do Caso",
      deleteConfirmation:
        "Você tem certeza disso? Todos os dados serão apagados",
      add: "Adicionar Status de Caso",
    },
    changeStatus: {
      activate: {
        subtitle: "Este status poderá ser aplicado a casos a partir de agora",
        title: "Ativar Status do Caso",
        cancel: "Cancelar",
        confirm: "Ativar",
      },
      inactivateBatch: {
        subtitle:
          "Você não poderá mais aplicar estes status selecionados a casos",
        confirm: "Alterar Status",
        cancel: "Cancelar",
        title: "Inativar todos os Status do caso selecionados",
      },
      title: "Alterar Status",
      activateBatch: {
        confirm: "Alterar Status",
        cancel: "Cancelar",
        subtitle:
          "Todos os status selecionados poderão ser aplicados a casos a partir de agora",
        title: "Ativar todos os Status do caso selecionados",
      },
      inactivate: {
        title: "Inativar Status do Caso",
        confirm: "Inativar",
        subtitle: "Você não poderá mais aplicar este status a casos",
        cancel: "Cancelar",
      },
      options: {
        inactivate: "Inativar registros",
        activate: "Ativar registros",
      },
    },
    noRecord: {
      title: "Crie seu primeiro registro!",
      actionButtonText: "Crie seu primeiro registro",
      subTitle: "Nenhum registro foi criado ainda.",
    },
    cellsHead: {
      name: "Nome do Status",
      status: "Status",
      easyid: "Id",
      actions: "Ações",
      description: "Descrição",
      businessUnit: "Unidade de Negócio",
      edit: "Editar Status do Caso",
      easyId: "ID",
      delete: "Deletar Status do Caso",
      type: "Tipo",
    },
    activate: {
      success: "Status do caso ativado com sucesso",
      error: "Erro ao ativar o status do caso",
    },
    inactive: "Inativo",
    pagination: {
      labelDisplayedRows: {
        moreThan: "mais que",
        of: "de",
      },
      backIconButtonText: "Página Anterior",
      labelRowsPerPage: "Linhas por Página:",
      nextIconButtonText: "Próxima Página",
    },
    header: {
      description:
        "Crie status para etiquetar e identificar sisuação de casos..",
      title: "Rastreie o status dos casos durante as operações",
      create: "Criar novo Status de Caso",
      subtitle: "Costumer Service",
    },
    inactivate: {
      error: "Erro ao inativar o status do caso",
      success: "Status do caso inativado com sucesso",
    },
    snackbar: {
      edit: {
        success: "Status editado com sucesso!",
      },
      delete: {
        error: "Erro ao deletar status do caso.",
        success: "Status do caso deletado com sucesso!",
      },
      create: {
        show: "Exibir",
        success: "Status adicionado com sucesso!",
      },
      deleteBatch: {
        success: "Status do caso deletado com sucesso!",
        error: "Erro ao deletar status do caso.",
      },
    },
    inactivateBatch: {
      success: "Status do caso inativado com sucesso",
      error: "Erro ao inativar o status do caso",
    },
    emptyState: {
      action: "Crie seu primeiro status de caso",
      title: "Perdemos suas coordenadas ...",
      subtitle: "Nenhum resultado corresponde aos seus critérios de pesquisa.",
    },
    drawerTitleCreate: "Crie um Status de Caso",
    notAllowed: {
      create: "Você não tem permissão para executar esta ação",
      delete: "Você não tem permissão para executar esta ação",
      update: "Você não tem permissão para executar esta ação",
    },
    drawerTitleUpdate: "Status do Caso",
    active: "Ativo",
  },
  tableHeader: {
    deleteModal: {
      subtitle:
        "Você perderá todas suas configuração e não poderá ser desfeito!",
      batchTitle: "Deletar estes Status de Caso?",
      confirm: "Deletar",
      singleTitle: "Deletar este Status de Caso?",
      cancel: "Cancelar",
    },
    deleteBatch: "Deletar selecionados",
  },
  search: {
    limit: {
      too_high: "Limite muito alto. Valor máximo permitido é {limit}",
    },
  },
  csm: {
    caseReason: {
      opening: "Abertura",
      closing: "Fechamento",
    },
    caseActions: {
      cellsHead: {
        easyId: "ID",
      },
    },
    caseOrigin: {
      cellsHead: {
        easyId: "ID",
      },
    },
  },
  caseTypes: {
    crud: {
      status: {
        inactvBatch: {
          sub: "Você não poderá mais associar casos a estes tipos",
        },
      },
    },
  },
  cellsHead: {
    easyid: "Id",
  },
  errorBoundary: {
    description:
      "Se o erro persistir entre em contato com o administrador do sistema",
    title: "Falha ao carregar dados",
    buttonText: "Tentar Novamente",
  },
  crm: {
    csm: {
      caseTypes: {
        easyid: "Id",
      },
    },
  },
  menu: {
    workflowstudio: "Workflow Studio",
    workflowbuilder: "Workflow Builder",
    "actions-forms": "Formulários de ações",
  },
  casetype: {
    business_unit: {
      not_edited: "Não é possível alterar a Unidade de Negócios.",
    },
  },
};

const crm = {
  csm: {
    mailingBatches: {
      noRecord: {
        actionButtonText: "Importar agora",
        subtitle: "Comece importando um lote",
        title: "Nenhum lote importado",
      },
      order: {
        label: "Ordenar por:",
        alphabetical: "Ordem alfabética",
        newest: "Novos",
        lastUpdated: "Últimos atualizados",
      },
      details: {
        numberOfRows: {
          tooltip: "Total de linhas do lote",
          label: "Número de Linhas",
        },
        createBy: {
          label: "Criado por",
        },
        registeredAt: {
          label: "Registrado em",
        },
        rowsWithIssues: {
          tooltip: "Linhas que não foram processadas devido a erros",
          label: "Linhas com Problemas",
        },
        cancelProcessing: "Cancelar Processamento",
        processedRows: {
          label: "Linhas Processadas",
        },
        rejectedRows: {
          label: "Linhas Rejeitadas",
        },
        deleteBatch: "Deletar Lote",
        processedAt: {
          label: "Processado em",
        },
        source: {
          label: "Fonte",
        },
      },
      pagination: {
        previousPage: "Página anterior",
        rowsPerPage: "Registros por página",
        nextPage: "Próxima página",
        of: "de",
        moreThan: "mais do que",
      },
      status: {
        canceled: {
          longLabel: "Processamento Cancelado",
          shortLabel: "Cancelado",
          longDescription: "Você cancelou o processamento deste lote",
        },
        pending: {
          shortLabel: "Pendente",
          longLabel: "Processamento Pendente",
          longDescription: "O lote está aguardando a fila de processamento",
        },
        processing: {
          longDescription: "Este lote está sendo processado",
          shortLabel: "Processando",
        },
        failed: {
          longDescription: "Processamento falhou. Nenhum caso foi importado",
          shortLabel: "Falhou",
          longLabel: "Falha no Processamento",
        },
        concluded: {
          longDescription:
            "Processamento completo. Todos os casos foram importados",
          shortLabel: "Concluído",
          longLabel: "Processamento Completo",
        },
        partiallyProcessed: {
          longDescription:
            "Parcialmente processado. Alguns erros foram identificados",
          longLabel: "Parcialmente Processado",
          shortLabel: "Parcialmente Processado",
        },
      },
      importBatches: {
        cancel: "Cancelar",
        dropperZone: {
          subtitle: "Apenas arquivos csv e txt com no máximo 50mb",
          title: "Clique ou solte um arquivo",
          dropHoverLabel: "Solte o arquivo aqui",
        },
        downloadBatchStatus: {
          error: "Não foi possível fazer download do relatório.",
          success: "Relatório baixado com sucesso!",
          processing: "O arquivo está sendo gerado.",
        },
        submit: "Importar Lote",
        title: "Importação de Lote",
      },
      drawerDetails: {
        registeredAt: {
          label: "Registrado em",
        },
        processedRows: {
          tooltip: "Linhas processadas com sucesso",
          label: "Linhas Processadas",
        },
        downloadReport: "Baixar Relatório",
        numberOfCasesReopened: {
          label: "Casos Reabertos",
          tooltip: "Casos reabertos com base em importações anteriores",
        },
        rejectedRows: {
          tooltip: "Linhas rejeitadas por regras de importação",
          label: "Linhas Rejeitadas",
        },
        numberOfRows: {
          label: "Número de Linhas",
          tooltip: "Total de linhas do lote",
        },
        cancelProcessing: "Cancelar Processamento",
        createBy: {
          label: "Criado por",
        },
        numberOfCasesIgnored: {
          tooltip: "Casos ignorados existentes no lote",
          label: "Casos Ignorados",
        },
        rowsWithIssues: {
          label: "Linhas com Problemas",
          tooltip: "Linhas que não foram processadas devido a erros",
        },
        source: {
          label: "Fonte",
        },
        processedAt: {
          label: "Processado em",
        },
        deleteBatch: "Deletar Lote",
      },
      deleteModal: {
        single: {
          title: "Deletar este Lote?",
          confirm: "Deletar",
          subtitle:
            "Você perderá todas os seus dados e isto não poderá ser desfeito!",
        },
        batch: {
          title: "Deletar todos os Lotes selecionados?",
          confirm: "Deletar",
          subtitle:
            "Você perderá todas os seus dados e isto não poderá ser desfeito!",
        },
      },
      cancelProcessingModal: {
        confirm: "Confirmar Cancelamento",
        title: "Cancelar este processamento?",
        cancel: "Cancelar",
        subtitle: "O processamento será cancelado e nenhum caso será importado",
      },
      notAllowed: {
        create: "Você não tem permissão para executar esta ação",
        update: "Você não tem permissão para executar esta ação",
        delete: "Você não tem permissão para executar esta ação",
        updateMailing: "Você não tem permissão para executar esta ação",
      },
      cellsHead: {
        actions: "Ações",
        registeredAt: "Registrado em",
        processedAt: "Processado em",
        name: "Nome do Lote",
        status: "Status do Processamento",
      },
      emptyState: {
        title: "Perdemos suas coordenadas...",
        subtitle:
          "Nenhum resultado corresponde aos seus critérios de pesquisa.",
      },
      actions: {
        delete: "Deletar Lote",
        update: "Editar",
        cancelProcessing: "Cancelar Processamento",
        deleteBatch: "Deletar selecionados",
        create: "Importar Lote",
      },
      title: "Lotes",
      selectedItens: {
        label: "linhas selecionadas",
      },
      form: {
        actions: {
          cancel: "Cancelar",
        },
      },
      search: {
        placeholder: "Busque por qualquer dado de Lote...",
      },
    },
    caseTypes: {
      deleteModal: {
        batch: {
          subtitle:
            "Todas as configurações serão perdidas e isto não poderá ser revertido!",
          title: "Deletar estes Tipos de Caso?",
          confirm: "Deletar",
        },
        single: {
          subtitle:
            "Todas as configurações serão perdidas e isto não poderá ser revertido!",
          title: "Deletar este Tipo de Caso?",
          confirm: "Deletar",
        },
      },
      form: {
        actions: {
          deleteCancel: "Cancelar",
          delete: "Remover",
          clearAll: "Limpar tudo",
          edit: "Editar",
          cancel: "Cancelar",
          deleteConfirmation: "Tem certeza? Todos os dados serão excluídos",
          create: "Criar",
        },
        createTitle: "Criar tipo de caso",
        name: {
          invalidCharacters:
            "Caracteres inválidos para nome (ou contém espaço no início)",
          label: "Nome",
          required: "Nome é obrigatório",
          maxLength: "Quantidade máxima de caracteres para nome excedida",
        },
        active: {
          false: "Não",
          label: "Este tipo de caso é ativo?",
          true: "Sim",
        },
        description: {
          maxLength: "Quantidade máxima de caracteres para descrição excedida",
          label: "Descrição",
        },
        log: {
          modifiedBy: "Modificado por",
          modifiedAt: "Modificado em",
          createdAt: "Criado em",
          createdBy: "Criado por",
        },
        businessUnit: {
          required: "Unidade de negócio é obrigatória",
          label: "Unidade de negócio",
        },
        updateTitle: "Editar tipo de caso",
      },
      pagination: {
        of: "de",
        previousPage: "Página anterior",
        rowsPerPage: "Registros por página",
        nextPage: "Próxima página",
        moreThan: "mais que",
      },
      header: {
        subtitle: "Crie tipos para gerenciar seus casos",
        title: "Serviço ao Consumidor",
      },
      actions: {
        deactivateBatch: "Desativar tipos de caso",
        activate: "Ativar tipo de caso",
        delete: "Remover tipo de caso",
        deleteBatch: "Remover tipos de caso",
        create: "Adicionar Tipo de Caso",
        update: "Editar tipo de caso",
        deactivate: "Desativar tipo de caso",
      },
      crud: {
        status: {
          options: {
            inactv: "Inativar registros",
            actv: "Ativar registros",
          },
          inactv: {
            confirm: "Inativar",
            cancel: "Cancelar",
            title: "Inativar este tipo de caso?",
            sub: "Você não poderá mais associar casos a este tipo",
          },
          actv: {
            title: "Ativar este tipo de caso?",
            sub: "Você agora poderá associar casos a este tipo",
            cancel: "Cancelar",
            confirm: "Ativar",
          },
          inactvBatch: {
            cancel: "Cancelar",
            sub: "Você não poderá mais associar casos a estes tipos",
            confirm: "Alterar Status",
            title: "Inativar todos os tipos de casos selecionados?",
          },
          actBatch: {
            title: "Ativar todos os tipos de casos selecionados?",
            sub: "Você agora poderá associar casos a este tipos",
            cancel: "Cancelar",
            confirm: "Alterar Status",
          },
          title: "Alterar Status",
        },
        notAllowed: {
          update: "Você não tem permissão para executar esta ação",
          create: "Você não tem permissão para executar esta ação",
          delete: "Você não tem permissão para executar esta ação",
        },
      },
      update: {
        success: "Tipo de caso atualizado com sucesso",
        error: "Erro ao atualizar tipo de caso",
      },
      bulkDelete: {
        error: "Não foi possível excluir os Tipos de Caso",
        success: "Tipos excluídos com sucesso",
      },
      inactive: "Inativo",
      bulkInactivate: {
        success: "Tipos de caso inativados com sucesso",
        error: "Erro ao inativar tipos de caso",
      },
      cellsHead: {
        description: "Descrição",
        name: "Nome do Tipo",
        easyId: "ID",
        actions: "Ações",
        status: "Status",
        active: "Ativo",
        easyid: "Id",
        businessUnit: "Unidade de negócio",
        inactive: "Inativo",
      },
      deactivateBatch: "Desativar tipos de caso",
      deactivate: "Desativar tipo de caso",
      deleteBatch: "Remover tipos de caso",
      create: {
        success: "Tipo de caso criado com sucesso",
        error: "Erro ao criar tipo de caso",
      },
      delete: {
        error: "Não foi possível excluir o Tipo de Caso",
        success: "Tipo excluído com sucesso",
      },
      search: {
        placeholder: "Busque pelo Nome do Tipo",
      },
      inactivate: {
        success: "Tipo de caso inativado com sucesso",
        error: "Erro ao inativar tipo de caso",
      },
      activate: {
        success: "Tipo de caso ativado com sucesso",
        error: "Erro ao ativar tipo de caso",
      },
      emptyState: {
        subtitle: "Lorem ipsum dolor sit amet",
        title: "Nenhum tipo de caso encontrado",
      },
      selectedItens: {
        label: "tipo(s) de caso selecionados",
      },
      title: "Tipo de Caso",
      active: "Ativo",
      easyid: "Id",
    },
    distributionRules: {
      drawerDetails: {
        lastModifiedAt: "Última modificação em",
        businessUnit: "Unidade de Negócio",
        lastModifiedBy: "por",
        users: "Usuários",
        createdBy: "por",
        createdAt: "Criado em",
        priority: "Prioridade",
        rule: "Regra",
        queue: "Fila",
        teams: "Times",
        teamsAndUsers:
          "Times e Pessoas vinculadas a esta Regra de Distribuição",
        appliedToQueues: "Regras de Distribuição aplicadas a Filas",
        description: "Descrição",
        auto: "auto",
        name: "Nome da Regra de Distribuição",
      },
      changeStatusModal: {
        inactivate: {
          title: "Inativar esta Regra de Distribuição?",
          confirm: "Inativar",
          subtitle: "Novos casos não serão disrtibuídos por estas regras",
          cancel: "Cancelar",
        },
        deactivate: {
          title: "Inativar Regra de Distribuição?",
          cancel: "Cancelar",
          confirm: "Inativar",
          subtitle: "Novos casos não serão distribuídos por esta regra",
        },
        activate: {
          confirm: "Ativar",
          cancel: "Cancelar",
          title: "Ativar Regra de Distribuição?",
          subtitle:
            "Novos casos serão distribuídos por esta regra a partir de agora",
        },
        activateBatch: {
          confirm: "Ativar",
          title: "Ativar todas as Regras de Distribuição selecionadas?",
          cancel: "Cancelar",
          subtitle:
            "Novos casos serão distribuídos por estas regras a partir de agora",
        },
        inactivateBatch: {
          cancel: "Cancelar",
          subtitle: "Novos casos não serão disrtibuídos por estas regras",
          confirm: "Inativar",
          title: "Inativar todas as Regras de Distribuição selecionadas?",
        },
        batch: {
          subtitle:
            "Você alterará o status das regras de distribuição selecionadas!",
          confirm: "Alterar status",
          title: "Inativar todas as Regras de Distribuição selecionadas?",
          cancel: "Cancelar",
        },
      },
      order: {
        alphabetical: "Ordem alfabética",
        lastUpdated: "Últimos atualizados",
        newest: "Mais recentes",
        label: "Ordenar por:",
      },
      header: {
        description:
          "Crie regras de distribuição para múltiplas filas, vinculado elas aos times e usuários",
        create: "Criar nova Regra",
        title: "Gerencie suas regras de distribuição de caso",
        subtitle: "Atendimento ao cliente",
      },
      actions: {
        deactivateBatch: "Inativar selecionados",
        delete: "Deletar",
        changeStatus: {
          title: "Alterar Status",
          options: {
            inactivate: "Inativar Registros",
            activate: "Ativar Registros",
          },
        },
        update: "Editar",
        create: "Adicionar Regra de Distribuição",
        deleteBatch: "Deletar selecionados",
      },
      details: {
        users: "Usuários",
        teamsAndUsers:
          "Times e Pessoas vinculadas a esta Regra de Distribuição",
        lastModifiedAt: "Última modificação em",
        lastModifiedBy: "por",
        tooltip: "Detalhes",
      },
      distributionRule: {
        label: "Regra de Distribuição",
        placeholder: "Selecione uma regra",
      },
      cellsHead: {
        actions: "Ações",
        description: "Descrição",
        businessUnit: "Unidade de Negócio",
        status: "Status",
        name: "Nome da Regra",
      },
      businessUnit: {
        errors: {
          required: "Unidade de Negócio é obrigatório",
        },
        label: "Unidade de Negócio *",
      },
      inactivate: {
        success: "Regra inativada com sucesso!",
        error: "Incapaz de inativar Regra",
      },
      basicStep: {
        title: "Informações Básicas",
      },
      delete: {
        success: "Regra deletada com sucesso!",
        error: "Incapaz de deletar Regra",
      },
      deleteModal: {
        single: {
          title: "Deletar esta Regra de Distribuição?",
          subtitle:
            "Você perderá todas as sua configurações e isto não poderá ser desfeito!",
          confirm: "Deletar",
        },
        batch: {
          confirm: "Deletar",
          subtitle:
            "Você perderá todas as sua configurações e isto não poderá ser desfeito!",
          title: "Deletar todas as Regras de Distribuição selecionadas?",
        },
      },
      create: {
        error: "Incapaz de adicionar Regra",
        success: "Regra adicionada com sucesso!",
      },
      form: {
        createTitle: "Crie uma nova Regra de Distribuição",
        actions: {
          delete: "Deletar",
          deleteConfirmation: "Deletar esta Regra de Distribuição?",
          deleteCancel: "Cancelar deleção",
          edit: "Salvar Alterações",
          cancel: "Cancelar",
          create: "Adicionar Regra",
          clearAll: "Limpar tudo",
        },
        updateTitle: "Editar Regra",
      },
      users: {
        label: "Usuários",
        placeholder: "Selecionar Usuário",
      },
      pagination: {
        previousPage: "Página anterior",
        nextPage: "Próxima página",
        rowsPerPage: "Registros por página",
        moreThan: "mais do que",
        of: "de",
      },
      name: {
        label: "Nome da Regra de Distribuição *",
        errors: {
          required: "Nome é obrigatório",
          maxLength: "O nome pode ter no máximo 255 caracteres",
        },
      },
      priority: {
        auto: "auto",
        label: "Prioridade",
      },
      queue: {
        placeholder: "Selecione uma Fila",
        label: "Fila",
      },
      notAllowed: {
        create: "Você não tem permissão para executar esta ação",
        update: "Você não tem permissão para executar esta ação",
        delete: "Você não tem permissão para executar esta ação",
      },
      description: {
        label: "Descrição",
        errors: {
          maxLength: "A descrição pode ter no máximo 4000 caracteres",
        },
      },
      update: {
        success: "Regra editada com sucesso!",
        error: "Incapaz de editar Regra",
      },
      addRule: "Adicionar Regra",
      selectedItens: {
        label: "linhas selecionadas",
      },
      teams: {
        placeholder: "Selecionar Time",
        label: "Times",
      },
      title: "Regras de Distribuição",
      applyToQueuesStep: {
        description:
          "Você pode configurar o nível de prioridade de execução de uma regra",
        title: "Aplique Regras de Distribuição à Filas",
      },
      status: {
        inactive: "Inativo",
        active: "Ativo",
      },
      activate: {
        success: "Regra ativada com sucesso!",
        error: "Incapaz de ativar Regra",
      },
      emptyState: {
        subtitle:
          "Nenhum resultado corresponde aos seus critérios de pesquisa.",
        title: "Perdemos suas coordenadas...",
      },
      teamsAndUsersStep: {
        title: "Vincule times e pessoas a esta regra de distribuição",
      },
      noRecord: {
        title: "Crie sua primeira Regra de Distribuição",
        actionButtonText: "Adicionar uma Regra de Distribuição",
        subtitle: "Nenhum registro foi criado.",
      },
      search: {
        placeholder: "Busque pelo Nome da Regra",
      },
    },
    mailing: {
      automation: {
        title: "Automação",
        cron: {
          label: "Expressão Cron",
          placeholder: "Insira a expressão cron",
          tooltip: "Use a expressão cron para agendar eventos",
        },
        automaticButton: "Automática",
        manualButton: "Manual",
        manualHintText:
          "A importação via banco de dados apenas ocorrerá quando requisitada pelo usuário manualmente",
        checkbox: {
          label: "A importação também pode ser feita manualmente",
        },
        description: "Defina como a execução da importação deve acontecer",
      },
      modal: {
        delete: {
          confirm: "Remover",
          subtitle:
            "Você perderá todas as configurações e lotes e isto não poderá ser desfeito!",
          input: {
            error: "O nome do Mailing não corresponde!",
            label: "Digite o nome do Mailing para remove-lo",
            helper:
              "Você precisa inserir o nome do Mailing para confirmar a ação",
          },
          cancel: "Cancelar",
          title: "Remover Mailing?",
        },
        deactivate: {
          subtitle: "Você não poderá importar novos lotes",
          title: "Desativar Mailing?",
          cancel: "Cancelar",
          confirm: "Desativar",
        },
        activate: {
          subtitle: "Você poderá importar novos lotes a partir de agora",
          confirm: "Ativar",
          title: "Ativar Mailing?",
          cancel: "Cancelar",
        },
      },
      mapping: {
        mapTo: "Mapear para",
        columnNamePlaceholder: "Definir nome da coluna",
        sidebar: {
          tooltipCheckbox: "Esta é uma configuração padrão do sistema",
          tooltipChanged: "Exibir configurações adicionais",
          header: "Configurações Adicionais",
          requiredField:
            "O preenchimento deste campo é obrigatório para a criação do caso",
          tooltip: "Configurar Campo",
        },
        columnName: "Nome da Coluna",
        sideBar: {
          noRecord: {
            title: "Configure um campo",
            subtitle:
              "Selecione um campo para realizar configurações adicionais",
          },
        },
        mapToPlaceholder: "Selecione um campo",
        description: "Mapeie suas colunas com os campos do sistema",
        title: "Mapeamento",
        add: "Adicionar nova linha",
        remove: "Deletar Linha",
      },
      details: {
        conclusion: {
          rules: {
            reopenCases: {
              helper: "Casos abertos permanecerão abertos",
              label:
                "Você gostaria de reabrir os casos em mailings recorrentes?",
            },
            options: {
              yes: "Sim",
              no: "Não",
            },
            closeCasesNewBatch: {
              label:
                "Encerrar casos sempre que o id externo não estiver presente ao importar um novo lote?",
              helper: "Para casos abertos de importações anteriores",
            },
            title: "Você mapeou um ID Externo",
          },
          ruleCloseCasesNewBatch: {
            label:
              "Especifique o status que o caso irá adotar ao ser encerrado",
            placeholder: "Selecione um status",
          },
        },
        upload: {
          uploadFiles: {
            processed: "Processado",
            error: "Erro",
            success: "Sucesso",
            completed: "Completado",
            duplicated: "Duplicado",
          },
          header: {
            description:
              "Solte ou selecione um arquivo txt ou csv para importar seus dados",
            title: "Carregue um arquivo",
          },
          success: "Carregado com sucesso",
          error: "Erro ao carregar o arquivo",
          dropperZone: {
            title: "Clique ou solte um arquivo",
            subtitle: "Apenas arquivos csv e txt com no máximo 50mb",
            dropHover: "Solte o arquivo aqui",
          },
          processing: "Processando...",
        },
        mailingDefinitionsList: {
          mapTo: "Definições",
          inputPlaceholder: "Insira um valor",
          columnName: "Campos Complementares",
          selectPlaceholder: "Selecione uma opção",
        },
        definitions: {
          description:
            "Algumas definições ainda precisam ser feitas para o mailing funcionar corretamente",
          title: "Definições",
        },
        update: {
          error: "Erro ao atualizar mailing",
          success: "Mailing atualizado com sucesso",
        },
      },
      create: {
        update: {
          error: "Erro ao atualizar o mailing",
          success: "Mailing atualizado com sucesso",
        },
        setup: {
          label: {
            bu: "Unidade de Negócio pertencente a este mailing",
            name: "Nomeie seu Mailing",
            import: "Selecione um tipo de importação",
          },
          placeholder: {
            bu: "Unidade de Negócio",
            name: "Nome do Mailing",
          },
          duplicateMailingName:
            "Já existe um mailing com este nome, vinculado a esta Unidade de Negócio",
          required: {
            bu: "Unidade de negócio é obrigatório",
          },
        },
        header: {
          description:
            "Associe uma Unidade de Negócio e escolha seu tipo de importação.",
          subtitle: "Serviço ao Consumidor",
          title: "Crie seu Mailing",
        },
        error: "Erro ao criar o mailing",
        success: "Mailing criado com sucesso",
        datasource: {
          file: "Importar de arquivo",
          database: "Importar de banco de dados",
        },
        footer: {
          text: "Voltar para Lista de Mailings",
        },
      },
      activate: {
        success: "Mailing ativado com sucesso",
        error: "Problema ao ativar Mailing",
      },
      header: {
        description:
          "Importe, gerencie e crie regras para suas listas de mailing, afim de sincronizá-las com as operações da sua Unidade de Negócio! ",
        title: "Construa sua Lista de Mailings",
        subtitle: "Serviço ao Consumidor",
        createMailing: "Adicionar Mailing",
      },
      query: {
        title: "Busca",
        format: "Formatar código",
        description:
          "Use uma Query para definir quais dados deverão ser coletados",
        clearFormat: "Limpar formatação",
        placeholder: "Insira a Query aqui",
      },
      case_batch_report: {
        reject: {
          invalid_number: "Valor do campo {{field}} não é um número válido",
          invalid_range_number:
            "Valor do campo {{field}} fora da range definida",
          required:
            "Valor do campo {{field}} não pode ser nulo para criar o caso",
          invalid_length:
            "Valor do campo {{field}} é maior no lote do que o tamanho do campo",
          not_found: "Valor do campo {{field}} não existe cadastrado",
          invalid_date:
            "Valor do campo {{field}} não é uma data válida para criação do caso",
        },
        error: {
          create_case: "Falha inesperada ao criar caso",
        },
      },
      cardList: {
        actionButton: "Crie seu primeiro mailing",
        noResult: "Nós perdemos suas coordenadas...",
        orderBy: "Ordenar por",
        clearLabel: "Todos os Mailings",
        subtitle: "Nenhum cadastro realizado.",
        Search: "Busque por um Mailing",
        title: "Crie seu primeiro registro!",
        noResultDescription:
          "Nenhum resultado corresponde aos seus critérios de pesquisa.",
      },
      menu: {
        edit: "Editar",
        delete: "Remover",
        changeStatus: "Alterar Status",
      },
      card: {
        inactive: "Mailing Inativo",
        inactiveTag: "Inativo",
        finishMailing: "Finalize o cadastro do mailing",
        file: "Arquivo",
        dataBaseSync: "Sinc. Banco de Dados",
        pendingRegistration: "Cadastro Pendente",
      },
      conclusion: {
        content: {
          title: "Seu template de importação está pronto",
          subtitle:
            "Em breve regras de importação poderão ser configuradas aqui",
        },
        title: "Conclusão",
      },
      steps: {
        conclusion: "Conclusão",
        mapping: "Mapeamento",
        ruleIntegration: "Integração de Regras",
        connection: "Conexão",
        automation: "Automação",
        upload: "Carregar",
        query: "Busca",
      },
      footer: {
        nextStep: "Próximo",
        back: "Voltar",
        skipStep: "Pular esta etapa",
        cancel: "Cancelar",
        finish: "Concluir Configuração",
      },
      deactivate: {
        error: "Problema ao desativar Mailing",
        success: "Mailing desativado com sucesso",
      },
      sort: {
        alphabeticalOrder: "Ordem alfabética",
        lastUpdate: "Atualizado recentemente",
        newest: "Criado recentemente",
      },
      delete: {
        success: "Mailing removido com sucesso",
        error: "Problema ao remover Mailing",
      },
      connection: {
        label: "Selecione uma Conexão com um Banco de Dados",
        title: "Conecte um Banco de Dados",
        placeholder: "Selecione um Banco de Dados",
        description:
          "Crie uma conexão com um banco de dados para importar os campos do seu mailing",
      },
      notAllowed: {
        update: "Você não tem permissão para executar esta ação",
        delete: "Você não tem permissão para executar esta ação",
        create: "Você não tem permissão para executar esta ação",
      },
      filter: {
        file: "Arquivo",
        dataBase: "Sinc. Banco de Dados",
      },
      lastUpdateText: "Última Atualização:",
      file_part_header: {
        error: {
          not_found: "Cabeçalho do arquivo {{id}} não foi encontrado",
        },
      },
    },
    queues: {
      selectedItens: {
        label: "linhas selecionadas",
      },
      drawerDetails: {
        isnt: "não é",
        log: {
          createdBy: "por",
          createdAt: "Criado em",
          modifiedBy: "por",
          modifiedAt: "Modificado em",
        },
        description: {
          label: "Descrição",
        },
        businessUnit: {
          label: "Unidade de Negócio",
        },
        priority: {
          label: "Esta fila classifica casos antes de:",
        },
        orConditions: {
          label: "A filtragem segue QUALQUER condição abaixo:",
        },
        classification: {
          description:
            "Condições de filtragem que farão com que casos sejam classificados a esta fila",
          title: "Regras de Classificação de Fila",
        },
        name: {
          label: "Nome da Fila",
        },
        is: "é",
        andConditions: {
          label: "A filtragem segue TODAS as condições abaixo:",
        },
      },
      changeStatusModal: {
        inactivateBatch: {
          title: "Inativar todas as filas selecionadas?",
          cancel: "Cancelar",
          confirm: "Inativar",
          subtitle: "Estas filas não poderão classificar novos casos",
        },
        deactivate: {
          confirm: "Desativar",
          title: "Desativar Fila?",
          cancel: "Cancelar",
          subtitle: "Esta fila não poderá classificar novos casos",
        },
        activateBatch: {
          subtitle: "As filas irá classificar novos casos",
          title: "Ativar todas as filas selecionadas?",
          cancel: "Cancelar",
          confirm: "Ativar",
        },
        deactivateBatch: {
          title: "Desativar todas as Filas selecionadas?",
          confirm: "Inativar",
          cancel: "Cancelar",
          subtitle: "Estas fila não poderão classificar novos casos",
        },
        activate: {
          title: "Ativar Fila?",
          confirm: "Ativar",
          cancel: "Cancelar",
          subtitle: "A fila irá classificar novos casos",
        },
      },
      form: {
        actions: {
          create: "Adicionar Fila",
          deleteConfirmation:
            "Tem certeza sobre isto? Todos os dados serão excluídos",
          cancel: "Cancelar",
          edit: "Salvar Alterações",
          clearAll: "Limpar Tudo",
          deleteCancel: "Cancelar",
          delete: "Deletar",
        },
        firstStep: {
          descriptionPlaceholder: "Descrição",
          title: "Informações básicas",
          validation: {
            requiredName: "Este campo é obrigatório",
            requiredBusinessUnit: "Este campo é obrigatório",
            nameMaxLength: "Você atingiu o limite de caracteres",
          },
          businessUnitPlaceholder: "Unidade de Negócio *",
          namePlaceholder: "Nome da fila *",
        },
        secondStep: {
          orCondition: {
            valuePlaceholder: "Defina um Valor",
            parameterPlaceholder: "Selecione um Parâmetro",
            valueLookupPlaceholder: "Selecione um Valor",
            label: "O filtro deve seguir QUALQUER condição abaixo:",
            buttonLabel: "Adicionar Condição",
          },
          title: "Defina regras de classificação da fila",
          subtitle:
            "Defina as condições de filtragem que farão com que os casos sejam classificados a esta Fila",
          is: "é",
          allCondition: {
            parameterPlaceholder: "Selecione um Parâmetro",
            label: "O filtro deve seguir TODAS as condições abaixo:",
            valuePlaceholder: "Defina um Valor",
            valueLookupPlaceholder: "Selecione um Valor",
            buttonLabel: "Adicionar Condição",
          },
          true: "Sim",
          false: "Não",
          isnt: "não é",
        },
        log: {
          createdAt: "Criado em",
          createdBy: "por",
          modifiedAt: "Última modificação em",
          modifiedBy: "por",
        },
        thirdStep: {
          title: "Esta fila deve classificar casos antes de:",
          placeholder: "Selecione uma fila",
        },
        createTitle: "Crie uma nova Fila",
        updateTitle: "Editar Fila",
      },
      cellsHead: {
        status: "Status",
        name: "Nome da Fila",
        actions: "Ações",
        businessUnit: "Unidade de Negócio",
        hasPriorityOver: "Possui Prioridade Sobre",
      },
      actions: {
        delete: "Deletar",
        create: "Adicionar Fila",
        changeStatus: {
          options: {
            inactivate: "Inativar Registros",
            activate: "Ativar Registros",
          },
        },
        deleteBatch: "Deletar selecionados",
        update: "Editar",
        deactivateBatch: "Alterar Status",
      },
      pagination: {
        nextPage: "Próxima página",
        of: "de",
        rowsPerPage: "Registros por página",
        previousPage: "Página anterior",
        moreThan: "mais do que",
      },
      noRecord: {
        actionButtonText: "Adicione uma Fila",
        title: "Crie sua primeira Fila!",
        subtitle: "Nenhuma fila foi registrada",
      },
      details: "Detalhes",
      emptyState: {
        subtitle: "Nenhum resultado coincide com seus critérios de pesquisa.",
        title: "Perdemos suas coordenadas...",
      },
      activate: {
        success: "Fila ativada com sucesso!",
        error: "Não foi possível ativar Fila",
      },
      inactivate: {
        success: "Fila inativada com sucesso!",
        error: "Não foi possível inativar Fila",
      },
      status: {
        inactive: "Inativo",
        active: "Ativo",
      },
      title: "Filas",
      search: {
        placeholder: "Busque pelo Nome da Fila",
      },
      deleteModal: {
        batch: {
          title: "Deletar estas filas?",
          confirm: "Deletar",
          subtitle:
            "Você perderá todas as sua configurações e isto não poderá ser desfeito!",
        },
        single: {
          subtitle:
            "Você perderá todas as sua configurações e isto não poderá ser desfeito!",
          title: "Deletar esta Fila?",
          confirm: "Deletar",
        },
      },
      create: {
        error: "Erro ao adicionar Fila",
        success: "Fila adicionada com sucesso!",
      },
      order: {
        newest: "Mais recentes",
        lastUpdated: "Últimos atualizados",
        label: "Ordenar por:",
        alphabetical: "Ordem alfabética",
      },
      notAllowed: {
        update: "Você não tem permissão para executar esta ação",
        delete: "Você não tem permissão para executar esta ação",
        create: "Você não tem permissão para executar esta ação",
      },
      header: {
        title: "Crie e gerencie filas de casos",
        create: "Adicionar Fila",
        description:
          "Crie regras de filtragem para agrupar casos de uma mesma classificação em filas",
        subtitle: "Atendimento ao cliente",
      },
      delete: {
        error: "Não foi possível remover Fila",
        success: "Fila deletada com sucesso",
      },
      update: {
        success: "Fila editada com sucesso!",
        error: "Erro ao editar Fila",
      },
    },
    csm: {
      mailingBatches: {
        status: {
          processing: {
            shortLabel: "Processando",
            longDescription: "Este lote está sendo processado",
          },
        },
      },
    },
    caseStatus: {
      inactive: "Inativo",
      active: "Ativo",
    },
    caseSource: {
      inactive: "Inativo",
      active: "Ativo",
    },
    caseActions: {
      active: "Ativo",
      inactive: "Inativo",
    },
    agentStatus: {
      inactive: "Inativo",
      active: "Ativo",
    },
    distribution_rule: {
      team: {
        already_inserted:
          "O time {{teamId}} já existe para regra de distribuição {{distributionRuleId}}",
      },
      person: {
        already_inserted:
          "A pessoa {{personId}} já existe para regra de distribuição {{distributionRuleId}}",
      },
    },
  },
  company: {
    validations: {
      invalidIdentifier: "CNPJ Inválido",
      website: "URL inválida",
      email: "Email inválido",
      required: "Campo obrigatório",
      nameExists: "Nome já cadastrado",
      unique: "O nome da empresa deve ser único",
      min: "O nome da empresa deve ter no mínimo 3 caracteres",
      max: "O nome da empresa deve ter no máximo 100 caracteres",
    },
    confirmDeletion: "Confirmar Deleção",
    activate: "Ativar Empresa",
    noRecordDescription: "Nenhuma empresa foi criada ainda.",
    email: "Email",
    edit: "Editar Empresa",
    modalDelete: {
      errorText: 'Você precisa digitar "Deletar" para confirmar',
      input: 'Digite "Deletar" para confirmar',
    },
    alert: {
      deleteSuccess: "Empresa deletada com sucesso!",
      error_on_add: "Não foi possível adicionar sua empresa, tente novamente",
      inactivateSuccess: "Empresa inativada com sucesso",
      activateSuccess: "Empresa ativada com sucesso",
      successfully_added: "Empresa salva com sucesso",
      successfully_edited: "Empresa editada com sucesso",
    },
    noRecordTitle: "Crie sua primeira empresa!",
    identifier: "CNPJ",
    tabs: {
      subsidiary: "Empresas subsidiárias",
      company: "Empresa",
      subsidiaryText:
        "Para habilitar esta função, você precisa preencher os campos obrigatórios da empresa",
    },
    type: "Tipo da Empresa",
    basicData: "Dados básicos",
    phone: "Telefone",
    parentCompany: "empresa pai",
    emptyStateSubtitle:
      "Nenhum resultado corresponde aos seus critérios de pesquisa.",
    noSubsidiary: "Essa empresa não possui subsidiárias.",
    subsidiaries: "Subsidiárias",
    deletePlural: "Deletar Empresas",
    address: {
      title: "Endereço",
      street: "Rua e número",
      city: "Cidade",
      state: "Estado",
      zipCode: "CEP",
      country: "País",
      additional: "Complemento",
    },
    removeSubsidiary: "Remover subsidiária",
    inactivatePlural: "Inativar Empresas",
    inactive: "Empresa Inativada",
    subsidiaryHelper:
      "Todas as empresas que possuírem {{companyName}} como empresa pai vão aparecer aqui.",
    fantasyName: "Nome fantasia",
    inactivate: {
      title: "Inativar empresa?",
      subtitle: "Você não poderá mais utilizar essa empresa",
    },
    contactInfo: "Informações de contato",
    deleteKey: "Deletar",
    name: "Nome da Empresa",
    appearLocation: "irão aparecer aqui.",
    showMore: "Exibir mais dados",
    delete: "Deletar Empresa",
    add: "Adicionar Empresa",
    back: "Voltar",
    editSubsidiary: "Editar empresa subsidiária",
    website: "Website",
    showLess: "Exibir menos dados",
    title: "Empresas",
    confirmDeletionLabelSingle:
      "Você está prestes a apagar um registro. Deseja continuar?",
    parent: "Empresa pai",
    layout: {
      subtitle:
        "Aqui você pode ver e gerenciar todos as empresas disponíveis na plataforma.",
      title: "Empresas",
    },
    changeStatus: "Alterar status",
    noRecordAction: "Crie sua primeira empresa",
    parentNotFound:
      "Nenhuma empresa encontrada. Crie uma nova empresa, para adicionar como empresa pai com o nome ",
    activatePlural: "Ativar Empresas",
    addPhone: "Adicionar",
    emailAddress: "Endereço de email",
    selected: "Selecionada(s)",
    confirmDeletionLabel:
      "Você está prestes a apagar vários registros. Deseja continuar?",
    removePhone: "Remover",
    fantasy_name: "Fantasy Name",
    emptyStateTitle: "Perdemos suas coordenadas...",
  },
  bu: {
    title: "Unidade de negócio",
    table: {
      shared: "Compartilhado",
      inactive: "Unidade de Negócio Inativa",
      children: "Filho",
      header: {
        delete: "Excluir UN",
        add: "Add nova UN",
        search: "Procurar por...",
        deletePlural: "Excluir UNs",
        inactivate: "Inativar UN",
        inactivatePlural: "Inativar UNs",
      },
      company: "Empresa",
      name: "Nome",
      edit: "Editar Unidade de Negócio",
      delete: "Excluir Unidade de Negócio",
      parent: "Pai",
      deleteModal: {
        batch: {
          title: "Deletar unidades de negócio?",
        },
        successfullyDeleted: "Unidade(s) de negócio deletada com sucesso!",
        title: "Deletar unidade de negócio?",
        description:
          "Você perderá todas suas informações e isso não poderá ser desfeito!",
      },
      activate: "Ativar Unidade de Negócio",
      changeStatus: "Alterar status",
      type: "Tipo",
      deleteBatch: "Deletar Selecionados",
      inactivate: "Inativar Unidade de Negócio",
      selectedItens: {
        label: "unidade(s) de negócio selecionadas",
      },
      status: "Status",
    },
    add: {
      name: "Nome Unidade de Negócios",
      owner: "Empresa proprietária",
      title: "Adicionar Unidade de Negócio",
      shared_with: "UN compartilhada com",
      confirm: "Adicionar nova UN",
      cancel: "Cancelar",
      add_others: "Adicionar outras UN",
      select_type: "Selecione o tipo",
    },
    alert: {
      successfully_edited: "Unidade de negócio editada com sucesso",
      error_on_add:
        "Não foi possível adicionar sua unidade de negócios, tente novamente",
      successfully_added: "Unidade de negócio salva com sucesso",
    },
    validations: {
      uniqueBU:
        "Já existe uma Unidade de Negócios com esse nome nessa empresa.",
      unique: "O nome da empresa deve ser único",
    },
    activateModal: {
      title: "Ativar unidade de negócio?",
      successfully: "Unidade de negócio ativada com sucesso!",
      subtitle: "Você poderá utilizar essa unidade de negócio",
    },
    inactivateModal: {
      subtitle: "Você não será capaz de utilizar mais essa unidade de negócio!",
      successfully: "Unidade(s) de negócio inativadas com sucesso!",
      title: "Inativar unidade de negócio?",
    },
    inactivateBatchModal: {
      title: "Inativar unidades de negócio?",
      subtitle: "Você não poderá utilizar estas unidades de negócio",
    },
    noRecord: {
      action: "Criar minha primeira Unidade de Negócio",
      description: "Nenhuma unidade de negócio foi criada até então.",
      title: "Crie sua primeira Unidade de Negócio!",
    },
    layout: {
      subtitle:
        "Aqui você pode ver e gerenciar todos as unidades de negócio disponíveis na plataforma.",
      title: "Unidade de Negócio",
    },
  },
  person: {
    noRecordAction: "Registre sua primeira pessoa",
    table: {
      phone: "Telefone",
      header: {
        fullName: "Nome Completo",
        document: "Documento",
      },
      actions: {
        deleteMultiple: "Deletar pessoas",
        activate: "Ativar pessoa",
        delete: "Deletar pessoa",
        inactivate: "Inativar pessoa",
        inactivateMultiple: "Inativar pessoas",
        edit: "Editar pessoa",
      },
      city: "Cidade",
      email: "Email",
      name: "Nome",
      jobTitle: "Profissão",
      inactive: "Pessoa inativa",
    },
    layout: {
      title: "Pessoa",
      subtitle: "Aqui você pode ver e gerenciar todos as pessoas cadastradas.",
    },
    noRecordTitle: "Registre sua primeira pessoa!",
    title: "Pessoa",
    tableHeader: {
      addPerson: "Adicionar pessoa",
      search: "Procurar por...",
    },
    noRecordDescription: "Nenhuma pessoa foi registrada ainda.",
    emptyState: {
      title: "Adicione sua primeira pessoa",
    },
  },
  chat: {
    yesterday: "Ontem",
    typeMessage: "Digite uma mensagem",
    today: "Hoje",
  },
  pagination: {
    of: "de",
    nextPage: "Próxima página",
    backIconButtonText: "Página anterior",
    labelRowsPerPage: "linhas por página",
    moreThan: "Mais do que",
  },
  settings: {
    searchCustomer: "Busque pelo cliente",
    users: {
      batchDeleteFailed: "Falha ao deletar usuários",
      batchDeleteSuccess: "Usuários deletados com sucesso",
      searchUser: "Busque pelo usuário",
      snackbarEditSuccess: "Usuário editado com sucesso.",
      workspaceHint: "Workspace padrão após o login",
      duplicatedUsername: "O nome de usuário deve ser único",
      subtitle: "Aqui você pode gerenciar todos os usuários da plataforma.",
      username: "Nome de usuário",
      deletionDisclaimer:
        "Você perderá todos os dados e essa ação não pode ser desfeita!",
      duplicatedEmail: "Este e-mail já foi registrado para outro usuário",
      description: "Aqui você pode gerenciar todos os usuários da plataforma.",
      documentLabel: "Documento",
      emptyStateMessage:
        "Nenhum resultado encontrado com seus critérios de busca.",
      personNotFound:
        "Nenhuma pessoa encontrada. Vá até Pessoas para adicionar uma nova pessoa.",
      personLabel: "Selecione uma Pessoa",
      requiredFields: "Campo obrigatório",
      workspaceNotFound: "Nenhum workspace encontrado com o termo",
      emptyState: "Perdemos suas coordenadas...",
      scnackbarCreatedFail: "Erro ao criar usuário.",
      businessUnits: "Selecione Unidades de Negócio",
      workspaceLabel: "Selecione um workspace",
      snackbarCreateSuccess: "Usuário criado com sucesso.",
      confirmDeletion: "Deletar",
      duplicatedDocument: "Este documento já está cadastrado para outra pessoa",
      title: "Usuários",
      snackbarEditFail: "Erro ao editar usuário.",
      noRecordDescription: "Nenhum usuário foi criado ainda.",
      invalidUsername: "Usuário inválido",
      selectedLabel: "usuário(s) selecionado(s)",
      businessUnitNotFound:
        "Nenhum resultado encontrado. Tente novamente ou vá até Unidades de Negócio caso queira adicionar uma nova unidade.",
      add: "Adicionar usuário",
      snackbarCreatedFail: "Erro ao criar usuário.",
      noRecordAction: "Criar seu primeiro usuário",
      confirmUserBatchDeletion: "Deletar usuários?",
      permissionLabel: "Dê Permissões",
      permissionNotFound:
        "Nenhum resultado encontrado. Tente novamente ou vá até Grupos de Permissões caso queira adicionar um novo grupo.",
      required: "Campo obrigatório",
      email: "E-mail",
      noRecordTitle: "Crie seu primeiro usuário!",
      confirmUserDeletion: "Deletar Usuário?",
      search: "Buscar em usuários...",
      inactivate: "Inativar usuários",
      edit: "Editar usuário",
      snackbarLoadFail: "Erro ao carregar dados.",
      fullNameLabel: "Nome Completo",
      personName: "Nome",
      password: "Senha",
    },
    user: {
      noRecordDescription: "Nenhum usuário foi criado até então.",
      editSuccess: "Usuário editado com sucesso.",
      createSuccess: "Usuário criado com sucesso.",
      batchDeleteSuccess: "Usuários deletados com sucesso",
      batchDeleteFailed: "Falha ao deletar usuários",
      noRecordTitle: "Crie seu primeiro usuário!",
      createFail: "Falha ao criar usuário.",
      editFail: "Falha ao editar usuário.",
      deleteSuccess: "Usuário deletado com sucesso.",
      subtitle: "Aqui você pode gerenciar todos os usuários da plataforma.",
      deleteFail: "Falha ao deletar usuário.",
      noRecordAction: "Criar meu primeiro usuário",
      batchDeleteUsers: "Deletar selecionados",
      confirmUserBatchDeletion: "Deletar usuários?",
    },
    searchBU: "Busque pelo negócio",
    permissions: {
      edit: "Editar",
      permissions: "Permissões",
      custom: "Personalizada",
      source: "Origem",
      requiredFields: "Campos obrigatórios",
      editFail: "Falha ao editar grupo de permissões",
      description: "Descrição",
      add: "Adicionar grupo de permissões",
      subtitle:
        "Aqui você pode ver e gerenciar todos os grupos de permissões disponíveis na plataforma.",
      required: "Obrigatório",
      permissionGroups: "Grupos de Permissões",
      groupDetails: "Detalhes do Grupo de Permissões",
      permissionGroup: "Grupo de permissões",
      editDrawer: {
        title: "Editar Grupo de Permissões",
      },
      editSuccess: "Grupo de permissões editado com sucesso",
      delete: "Deletar",
      addPermissions: "Adicionar permissões",
      groupNameValidCharacters:
        "O nome do grupo deve conter apenas letras, números, pontos (.) e hífen (-).",
      noRecordDescription: "Nenhum grupo de permissões foi criado até então.",
      noRecordAction: "Criar meu primeiro Grupo de Permissões",
      createSuccess: "Grupo de permissões criado com sucesso",
      deleteFail: "Falha ao deletar grupo de permissões",
      deletionDisclaimer:
        "Você perderá todas as suas informações e essa ação não pode ser desfeita!",
      deleteSuccess: "Grupo de permissões deletado com sucesso",
      confirmPermissionDeletion: "Deletar grupo de permissões?",
      groupName: "Nome do grupo",
      seeAll: "Ver todas as permissões",
      minimumCharactersRequired:
        "O nome do grupo deve conter ao menos 3 caracteres.",
      native: "Nativa",
      groupNameMustBeUnique: "Já existe um grupo com este nome.",
      permissionSearchPlaceholder:
        "Busque uma permissão pelo nome, código ou descrição",
      friendlyName: "Nome amigável",
      noRecordTitle: "Crie seu primeiro Grupo de Permissões!",
      createFail: "Falha ao criar grupo de permissões",
    },
    searchPerson: "Busque pela pessoa",
    invalidEmailStructure: "Por favor, adicione um e-mail válido.",
    emptyStateTitle: "Perdemos suas coordenadas...",
    search: "Buscar por...",
    required: "Obrigatório",
    searchCompany: "Busque pela empresa",
    listLoadFail:
      "Falha ao buscar dados. Tente novamente ou contate o administrador do sistema.",
    deleteSelected: "Deletar selecionados",
    delete: "Deletar",
    general: "Geral",
    searchPermissionGroup: "Busque pelo grupo de permissões",
    emptyStateSubtitle: "Nenhum resultado válido para seus critérios de busca.",
  },
  accessControl: {
    setPermissionGroup: "Definir permissões de Grupo",
    editPermission: "Editar Permissão",
    inactivatePermission: "Inativar Permissão",
    snackbarCreatedFail: "Erro ao criar grupo",
    apply: "Aplicar",
    editUser: "Editar usuário",
    associateUserPermission: "Associar Usuários a Permissão",
    allPermissions: "Todas as permissões",
    permissionName: "Nome da Permissão",
    groupDescription: "Descrição",
    permissionNative: "Nativa",
    permissionLabel: "Adicione um rótulo a sua permissão",
    setGroupsPermission: "Definir grupos para Permissão",
    addGroup: "Adicionar grupo",
    addUser: "Adicionar usuário",
    permissionDate: "Data",
    users: "Usuários",
    addPermission: "Adicionar Permissão",
    groupName: "Nome do grupo",
    groupActive: "Grupo ativo",
    selectAllPermissions: "Selecionar todas as permissões",
    inactiveGroup: "Inativar Grupo",
    groups: "Grupos",
    snackbarCreatedSuccess: "Grupo criado com sucesso!",
    search: "Buscar por...",
    permission: "Permissão",
    snackbarUserCreatedSuccess: "Usuário cadastrado com sucesso.",
    snackbarEditSuccess: "Grupo editado com sucesso!",
    isPermissionActive: "Permissão Ativa",
    userEmail: "E-mail",
    permissions: "Permissões",
    associatedPermissions: "Permissões associadas",
    associatePermissionsUser: "Associar usuário a permissões",
    snackbarUserEditFail: "Erro ao editar usuário.",
    userUsername: "Nome de usuário",
    permissionAlias: "Alcunha",
    inactivateUser: "Inativar usuário",
    joinPermission: "Juntar-se a permissão",
    isUserActive: "Usuário ativo",
    userName: "Nome",
    snackbarEditFail: "Erro ao editar grupo",
    associateUserGroup: "Associar Usuários a Grupo",
    snackbarUserEditSuccess: "Usuário editado com sucesso.",
    editGroup: "Editar Grupo",
    group: "Grupo",
    addLabel: "Adicionar",
    permissionDescription: "Descrição",
    snackbarUserCreatedFail: "Erro ao cadastrar usuário.",
    user: "Usuário",
    snackbarFetchFail: "Erro ao buscar itens.",
    setGroupsUser: "Definir usuário a grupos",
    permissionCreatedBy: "Criado Por",
  },
  webphone: {
    cancel: "Cancelar",
    transfer: "Transferir",
    idleStatus: "Livre",
    conference: "Conferência",
    dialing: "Discando",
    logout: "Desconectar",
    conferenceRoom: "Sala de conferência",
    audioSettings: "Configuração de áudio",
    addMember: "+ Participante",
    conferenceMembers: "Participantes",
    incomingCall: "Nova chamada",
    onCall: "Em chamada",
  },
  notAllowed: "Acesso negado. Por favor, contate a administração do sistema.",
  customer: {
    table: {
      deleteCustomer: {
        plural: "Deletar Clientes",
      },
      col: {
        customerOwner: "Proprietário do cliente",
        customer: "Cliente",
        type: "Tipo",
      },
      title: "Cliente",
      filter: {
        all: "Todos",
        customer: "Cliente",
        person: "Pessoas",
      },
      activate: "Ativar Cliente",
      editClient: "Editar Cliente",
      inactivateClient: "Inativar Cliente",
      inactivate: "Inativar Cliente",
      inactive: "Cliente Inativo",
      addCustomer: "Adicionar Cliente",
    },
    company: {
      title: "Empresa",
      subtitle: "Esta é uma empresa",
    },
    layout: {
      subtitle: "Aqui você pode ver e gerenciar todos seus clientes.",
      title: "Cliente",
    },
    person: {
      title: "Pessoa",
      subtitle: "Esta é uma pessoa",
    },
    emptyState: {
      title: "Adicionar seu primeiro cliente",
      subtitle:
        "Nós encorajamos você a adicionar seu cliente de forma simples com a plataforma cVortex.",
    },
    notFound: {
      title: "Não encontramos nada com esta pesquisa",
      subtitle:
        "Nós encorajamos você a ampliar sua pesquisa para encontrar algo compatível",
    },
    selectType: "Selecione o tipo de cliente",
  },
  connection_failed: "Falha de integração com API.",
  management: {
    cases: "Casos",
    overview: "Visão Geral",
    agents: "Agentes",
  },
  crm: {
    accessControl: {
      snackbarPermissionEditFail: "Erro ao editar.",
      snackbarUserEditSuccess: "Usuário editado com sucesso.",
      snackbarPermissionEditSuccess:
        "Edição de permissão efetuada com sucesso.",
      snackbarPermissionCreatedSuccess:
        "Criação de permissão efetuada com sucesso.",
      snackbarUserEditFail: "Erro ao editar usuário.",
      snackbarPermissionCreatedFail: "Erro ao criar permissão.",
      isUserActive: "Usuário ativo",
      snackbarUserCreatedFail: "Erro ao cadastrar usuário.",
      userName: "Nome",
      userUsername: "Nome de usuário",
      inactivateUser: "Inativar usuário",
      setGroupsUser: "Definir usuário a grupos",
      editUser: "Editar usuário",
      snackbarUserCreatedSuccess: "Usuário cadastrado com sucesso.",
      userEmail: "E-mail",
      associatePermissionsUser: "Associar usuário a permissões",
      addUser: "Adicionar usuário",
    },
    bu: {
      inactivateBatchModal: {
        title: "Inativar todas as unidades de negócio selecionadas?",
        subtitle:
          "Você não será capaz de utilizar mais essas unidades de negócio!",
      },
    },
    csm: {
      caseTypes: {
        actions: {
          create: "Adicionar Tipo De Caso",
          activate: "Alterar Status",
        },
        cellsHead: {
          name: "Tipo de Caso",
        },
        title: "Nome do Tipo",
        header: {
          subtitle: "Crie tipos para gerenciar seus casos",
        },
      },
      queues: {
        form: {
          secondStep: {
            orCondition: {
              buttonLabel: "Adicionar Condição",
            },
          },
        },
      },
    },
  },
  deleteEntity: {
    cancel: "Cancelar",
    errorText: 'Por favor, digite a palavra "Deletar" para confirmar',
    key: "Deletar",
    subtitleMultiple:
      "Você está prestes a apagar vários registros. Deseja continuar?",
    title: "Confirmar Deleção",
    subtitle: "Estes dados serão excluidos e essa ação não pode ser desfeita!",
    input: 'Digite "Deletar" para confirmar',
  },
  platform_settings: "Configurações da plataforma",
  digital: {
    activeCalls: "Chamadas ativas",
    noUser: "Nenhum usuário conectado",
    platformPass: "Senha da Plataforma",
    loginError: "Erro no login",
    extensionLine: "Ramal",
    waitingUser: "Aguardando usuário...",
    platformUser: "Usuário da Plataforma",
    agentName: "Nome do Agente",
    connect: "Conectar",
    agentLogin: "Log In de Agente",
    answer: "Atender",
    activeChat: "Chats ativos",
    selectPlatform: "Selecione uma plataforma",
  },
  inactivate: "Inativar",
  clearAll: "Limpar tudo",
  table: {
    rowsPerPage: "Linhas por página",
    of: "de",
  },
  drawers: {
    confirmationDeleteMessage:
      "Você tem certeza disso? Todos os dados serão apagados",
    confirmationDelete: "Você tem certeza disso? Todos os dados serão apagados",
  },
  saveChanges: "Salvar alterações",
  activate: "Ativar",
  dim: {
    activeCalls: "Chamadas ativas",
    activeChat: "Chats ativos",
    waitingUser: "Aguardando usuário...",
    noUser: "Nenhum usuário conectado",
  },
  crmbff: {
    request_timeout:
      "Parece que o servidor está demorando muito para responder. É possível que sua solicitação seja processada. Caso contrário, tente novamente mais tarde.",
    missing_bu: "Você precisa selecionar ao menos uma Unidade de Negócio.",
  },
  delete: "Deletar",
  users: {
    selectedLabel: "usuário(s) selecionado(s)",
  },
  easyId: "Easy Id",
  not_found: "Página não encontrada",
  logout_message: "Desconectar e sair",
  global_settings: "Configurações da plataforma",
  dataapi: {
    constraint_error:
      "Este registro não pode ser excluído porque encontra-se vinculado a alguma outra entidade. Desvincule-o e tente novamente.",
  },
  id: "ID",
  active: "Ativo",
  required_field: "Campo obrigatório",
  cancel: "Cancelar",
  te: {
    fantasy_name: "Fantasy Name",
  },
  access_control: "Controle de acesso",
  cellsHead: {
    easyid: "Id",
  },
  inactive: "Inativo",
  user_settings: "Configurações de usuário",
};

const dm = {
  drawer: {
    attributes: {
      file: {
        file_options: {
          video: "Vídeo",
          document: "Documento",
          audio: "Áudio",
        },
        file_list: "Lista de Arquivos",
        max_size_help: "O tamanho máximo do arquivo deve ser x MB",
        max_size: "Tamanho Máx.",
      },
      data_rules: {
        first_label: "Operador",
        menu: {
          title: "Tipo de valor",
          description:
            "Selecione o tipo de valor a ser adicionado no próximo campo",
          first_option: "Atributos",
          sec_option: "Valor",
        },
        and: "E",
        second_label: "Campo",
        title: "Regras dos Dados",
      },
      date: {
        options: {
          time: "Hora",
          date_time: "Data com hora",
          date: "Data",
        },
      },
      type: "Subtipo",
      fractionDigits: {
        help: "Dígitos (0 a 100) após a vírgula",
        label: "Casas Decimais",
      },
      sequence: {
        first_number: {
          help: "Número de dígitos depois da vírgula",
          label: "Primeiro Número",
        },
        display_format: {
          label: "Formato de Exibição",
          help: "Número de dígitos antes da vírgula",
        },
      },
      text: {
        type_options: {
          others: "Outros",
          website: "Web site",
          email: "E-mail",
        },
      },
      boolean: {
        default_value: "Valor Padrão",
        default_value_label: "Valor Padrão",
      },
      integerDigits: {
        help: "Dígitos (1 a 18) antes da vírgula",
        label: "Números Inteiros",
      },
      label: "Rótulo",
      charLimitMin: "Limite mín de caracteres",
      regex: "Regex",
      mandatory: "Obrigatório",
      description: "Descrição",
      remove_attribute: {
        subtitle:
          "Ao remover esse atributo, as uniques em que ele faz parte serão excluídas automaticamente",
        title: "Excluir Atributo ?",
      },
      charLimitMax: "Limite máx. de caracteres",
      mandatory_tooltip:
        "Toda vez em que a entidade receber novos dados, esse atributo deverá ser preenchido",
      encrypted: "Criptografado",
    },
  },
  dataschema: {
    save_format_is_mandatory:
      "O Formato de Exibição do atributo {{field_label}} do Tipo Numeração Automática (números sequenciais) não pode ser vazia.",
    field_fraction_digits_is_mandatory:
      "A Quantidade de Casas Decimais do atributo {{field_label}} do Tipo Numérico não pode ser nulo.",
    field_check_invalid_type_value:
      "O Tipo de Valor da Regras de Dados do Atributo {{field_label}} é inválido.",
    field_integer_digits_is_mandatory:
      "A Quantidade de Números Inteiros do atributo {{field_label}} do Tipo Numérico não pode ser nulo.",
    max_limit_cant_greater_than_999999999:
      "O tamanho máximo do texto é de 999.999.999 caracteres.",
    entity_update_deleted_unique_has_data:
      "Não é possível remover uma Unique de uma entidade que possui registros (dados).",
    entity_group_is_blank: "O Grupo da Entidade não pode ser vazio.",
    entity_update_inserted_field_has_data:
      "Não é possível inserir atributos obrigatórios em uma entidade que possui registros (dados).",
    field_lookup_not_existing_fk_constraint:
      "O atributo {{field_label}} do Tipo Pesquisa não possui uma Foreign Key associada. ",
    entity_label_is_blank: "O Rótulo da Entidade não pode ser vazio.",
    existing_schema: "Schema para o tenant informado já existente.",
    entity_fk_field_is_invalid:
      "A Foreign Key associada a Entidade é inválida. O atributo na Entidade não existe.",
    the_max_limit_field_cannot_be_negative:
      "O Limite Máximo do atributo {{field_label}} do Tipo Texto não pode ser negativo.",
    field_regex_is_invalid:
      "A informação de Regex do atributo {{field_label}} do Tipo Texto é inválida.",
    field_description_starts_with_space:
      "A Descrição do atributo não pode iniciar com espaço em branco.",
    number_of_operators_not_supported:
      "A Quantidade de Valores não é suportada para o operador.",
    field_check_invalid_number_values:
      "A Quantidade de Valores de Regra de Dados do Atributo {{field_label}} é inválida.",
    entity_group_is_empty: "A Lista de Grupo da Entidade não pode ser vazio.",
    field_default_value_is_invalid:
      "O Valor Padrão do campo booleano {{field_label}} é inválido.",
    field_starts_with_blank_space:
      "O campo não pode iniciar com espaço em branco.",
    save_format_must_have_a_numeric_pattern:
      "O Formato de Exibição do atributo {{field_label}} do Tipo Numeração Automática (números sequenciais) deve seguir o padrão de formatação.",
    entity_without_change: "A entidade não teve alterações.",
    field_type_is_invalid: "Tipo de campo inválido.",
    entity_update_deleted_field_has_data:
      "Não é possível deletar atributos de uma entidade que possui registros (dados).",
    entity_not_found: "A Entidade não existe.",
    field_check_is_null:
      "A Lista de Regras de Dados do Atributo {{field_label}} não pode ser vazia.",
    fixed_field_is_mandatory: "Existem campos obrigatórios",
    new_entity_existing_in_schema: "A Entidade já existe.",
    unique_not_found: "Não é possível remover uma Unique que não existe.",
    remove_field_associate_check:
      "Não é possível remover o atributo. Este atributo está associado a outro atributo como Regra de Dados.",
    field_integer_its_a_positive_number:
      "A Quantidade de Casas Decimais do atributo {{field_label}} do Tipo Numérico deve ser maior que zero.",
    field_regex_is_blank:
      "A informação de Regex do atributo {{field_label}} do Tipo Texto não pode ser vazia.",
    max_size_is_mandatory:
      "O Tamanho Máximo do atributo {{field_label}} do Tipo Arquivo não pode ser vazio.",
    schema_tennant_not_found: "Esquema para esse tennant não encontrado.",
    field_label_starts_with_blank_space:
      "A Rótulo do Atributo {{field_label}} não pode iniciar com espaço em branco.",
    field_is_blank: "O campo não pode ser vazio.",
    field_label_contains_special_char:
      "O Rótulo do Atributo {{field_label}} não pode conter caracteres especiais.",
    field_limit_is_mandatory:
      "Os Limite Mínimo e Máximo do atributo {{field_label}} do Tipo não podem ser vazios.",
    field_label_duplicate_in_entity:
      "O Atributo {{field_label}} já existe nesta Entidade.",
    field_integer_cant_greater_than_18:
      "O tamanho do número inteiro não pode ser mais que 18 caracteres.",
    entity_update_inserted_unique_has_data:
      "Não é possível adicionar uma Unique em uma entidade que possui registros (dados).",
    description_starts_with_blank_space:
      "A Descrição da Entidade não pode iniciar com espaço em branco.",
    value_not_compatible_with_the_field: "O Valor é inválido para o operador.",
    col_element_is_null: "",
    field_limit_can_not_be_0:
      "Os Limite Mínimo e Máximo do atributo {{field_label}} do Tipo Texto não podem ser zero.",
    col_element_is_blank: "Os elementos da lista não podem estar em branco.",
    existing_view:
      "Não é possível remover a Entidade. Esta entidade está associada a uma Visão.",
    entity_fk_target_field_is_invalid:
      "A Foreign Key associada a Entidade é inválida. O Atributo referenciado é inválido.",
    change_field_not_found:
      "Não é possível atualizar um atributo que não existe.",
    field_min_can_not_be_major_than_max:
      "O Limite Mínimo do atributo {{field_label}} do Tipo Texto não pode ser maior que o limite máximo.",
    field_required_must_only_be_true:
      "A Obrigatoriedade do Atributo {{field_label}} deve ser Sim.",
    field_not_exist_selected_entity: "O Atributo não existe na Entidade.",
    native_entity_cannot_be_updated:
      "Não é possível alterar uma entidade nativa.",
    invalid_operation:
      "Operação inválida. A operação deve ser CREATE, UPDATE ou DELETE.",
    view_existing_in_schema: "A Visão já existe.",
    field_is_empty: "A Lista não pode ser vazia.",
    connector_failed: "DataSchemaAPI - falha de conexão.",
    remove_fixed_field:
      "Este atributo é default da Entidade e não pode ser removido.",
    entity_update_changed_field_has_data:
      "Não é possível alterar atributos de uma entidade que possui registros (dados).",
    entity_label_initial_backspace:
      "O Rótulo da Entidade não pode iniciar com espaço em branco.",
    entity_has_association_with_fk:
      "A Entidade não pode ser excluída, pois possui dependência com as seguintes Entidades: {{entity_associate_label}}",
    unique_to_the_existing_field:
      "O atributo não poder ser selecionados em mais de 1 campo.",
    native_entity_cannot_be_deleted: "A Entidade Nativa não pode ser excluída.",
    field_check_invalid_attribute_value:
      "Os Valores de Atributos da Regra de Dados do Atributo {{field_label}} são inválidos.",
    col_element_starts_with_blank_space:
      "Os elementos da lista não podem iniciar com espaço em branco.",
    file_type_is_mandatory:
      "O Tipo de Arquivo do atributo {{field_label}} não pode ser vazio.",
    max_size_cant_greater_than_100000:
      "O tamanho máximo do arquivo não pode ser maior que 100000.",
    entity_group_starts_with_blank_space:
      "O Grupo da Entidade não pode iniciar com espaço em branco.",
    entity_unchanged_field_not_exist:
      "O atributo informado como não alterado não existe.",
    update_fixed_field:
      "Este atributo é default da Entidade e não pode ser atualizado.",
    start_number_must_be_a_positive_number:
      "A informação de Primeiro Número do atributo {{field_label}} do Tipo Numeração Automática (números sequenciais) deve ser maior que zero.",
    schema_tenant_not_found: "Esquema para o tenant informado não encontrado.",
    remove_field_not_found:
      "Não é possível remover um atributo que não existe.",
    operator_is_not_accepted_for_this_field:
      "O Operador é inválido para a aplicação dos filtros.",
    entity_group_contains_special_char:
      "O Grupo da Entidade não pode conter caracteres especiais.",
    field_label_cant_greater_than_255:
      "O tamanho máximo do Rótulo é de 255 caracteres.",
    save_format_has_invalid_pattern:
      "O Formato de Exibição do atributo {{field_label}} do Tipo Numeração Automática (números sequenciais) não possui um padrão de formatação válido.",
    entity_update_description_has_data:
      "Não é possível alterar a descrição de uma entidade que possui registros (dados).",
    max_size_must_be_positive_number:
      "O Tamanho Máximo do atributo {{field_label}} do Tipo Arquivo deve ser maior que zero.",
    col_element_is_black: "Os elementos da lista não podem estar em branco.",
    field_contains_special_char:
      "O campo não pode possuir caracteres especiais.",
    field_desc_cant_greater_than_4000:
      "O tamanho máximo da descrição não pode ser maior que 4000 caracteres.",
    the_min_limit_field_cannot_be_negative:
      "O Limite Mínimo do atributo {{field_label}} do Tipo Texto não pode ser negativo.",
    field_sequence_not_exist_unique_const:
      "O Atributos do tipo Numeração Automática (números sequenciais) devem estar associados como Unique.",
    col_element_contains_special_char:
      "Os elementos da lista não podem conter caracteres especiais.",
    field_associate_with_unique:
      "Não é possível remover um atributo associado a um grupo de Uniques.",
    entity_update_groups_has_data:
      "Não é possível alterar os grupos de uma entidade que possui registros (dados).",
    field_check_invalid_operator:
      "O Operador do Atributo {{field_label}} é inválido.",
    field_label_is_blank:
      "O Rótulo do Atributo {{field_label}} não pode ser vazio.",
    entity_has_data:
      "Não é possível excluir uma entidade que possui registros (dados).",
    entity_label_contains_special_char:
      "O Rótulo da Entidade não pode conter caracteres especiais.",
    field_fraction_cant_greater_than_100:
      "O tamanho máximo das casas decimais não pode ser mais que 100 caracteres.",
    cannot_change_the_type_of_the_field:
      "Não é possível alterar o Tipo do Campo.",
    entity_update_label_has_data:
      "Não é possível alterar o Rótulo de uma entidade que possui registros (dados).",
    field_check_invalid_static_value:
      "Os Valores estáticos de Regra de Dados do Atributo {{field_label}} são inválidos.",
    max_size_is_zero:
      "O Tamanho Máximo do atributo {{field_label}} do Tipo Arquivo não pode ser igual a zero.",
    update_entity_cannot_informed_field: "Atributos inválidos.",
    field_unique_is_invalid: "O identificador do atributo é inválido.",
    view_not_found: "Essa visão não existe.",
    save_format_invalid_structure_pattern:
      "O Formato de Exibição do atributo {{field_label}} do Tipo Numeração Automática (números sequenciais) não possui uma estrutura de padrão de formatação válida.",
    start_number_is_mandatory:
      "A informação de Primeiro Número do atributo {{field_label}} do Tipo Numeração Automática (números sequenciais) não pode ser vazia.",
    field_required_is_null:
      "A Obrigatoriedade do Atributo {{field_label}} não pode ser vazia.",
    entity_unique_is_invalid: "A Unique está associada a um Atributo inválido.",
    min_limit_cant_greater_than_999999999:
      "O tamanho mínimo do atributo do tipo texto não pode ser maior que 999.999.999 caracteres.",
    field_description_is_blank:
      "A Descrição do Atributo {{field_label}} não pode ser vazio.",
    entity_fk_target_entity_is_invalid:
      "A Foreign Key associada a Entidade é inválida. A Entidade referenciada não existe.",
    unique_not_informed: "Atributos inválidos.",
    field_fraction_its_a_natural_number:
      "A Quantidade de casas Decimais do atributo {{field_label}} do Tipo Numérico deve ser maior ou igual a zero.",
  },
  reset: "Reset",
  dataapi: {
    invalid_email_field:
      "Campo {{field_name}} da entidade {{entity}} deve ser um email válido respeitando o formato {{regex}}.",
    invalid_max_length:
      "Campo {{field_name}} da entidade {{entity}} não deve ser maior que {{max_length}}.",
    invalid_min_length:
      "Campo {{field_name}} da entidade {{entity}} não deve ser menor que {{min_length}}.",
    entity_not_found: "Entidade {{entity}} não encontrada.",
    field_not_found: "Campo {{field}} da entidade {{entity}} não encontrado.",
    mandatory_id:
      "Operação de {{operation}} na entidade {{entity}} o campo _id é obrigatório.",
    required_constraint:
      "Restrição de unicidade {{field_name}} da entidade {{entity}} não pode ser vazia.",
    required_field:
      "Campo {{field_name}} da entidade {{entity}} é obrigatório.",
    constraint_error:
      "Erro de restrição: Entidade {{entity}} - Restrição {{value}}.",
    invalid_regex_match:
      "Campo {{field_name}} da entidade {{entity}} deve respeitar o formato {{regex}}.",
    not_blank_field:
      "Campo {{field_name}} da entidade {{entity}} não pode ser nulo ou vazio.",
  },
  wizard: {
    attributes_step: {
      drawer: {
        types: {
          boolean: "Booleano",
          date: "Data/Hora",
          auto_num: "Numeração Automática",
          currency: "Moeda",
          number: "Número",
          file: "Arquivo",
          lookup: "Pesquisa",
          text: "Texto",
        },
        close: "Eu não quero adicionar mais, somente fechar",
        text_created: "Atributo Texto",
        add: "Adicionar Atributo",
        another_attribute: "Criar outro atributo",
        change: "Alterar Atributo",
        end: {
          title: "Finalizado",
        },
        title: "Atributos",
        subtitle: "Selecione um tipo de atributo desejado",
        select: "Selecionar Atributo",
        attr_created: "Atributo {{type}}",
      },
      table: {
        button: "Adicionar Atributo",
        empty_state: {
          title: "Adicione seu primeiro atributo",
          desc: "Adicione atributos conforme necessário, e não se preocupe, é fácil alterá-los ou remove-los depois",
        },
        title: "Atributos",
      },
    },
    cant_update_platform_field:
      "Não é possível alterar atributos da plataforma",
    uniques: {
      remove_group: "Remover Grupo",
      add_group: "Adicionar Novo Grupo",
    },
    attribute: "Atributos",
    cant_delete_native_attribute:
      "Não é possível remover atributos da plataforma",
    entity: "Entidade",
    cant_delete_platform_field:
      "Não é possível remover atributos da plataforma",
    entity_information: "Informações da Entidade",
    cant_delete_fields_with_data:
      "Não é possível remover atributos de uma entidade que possua dados",
    cancel_modal: {
      title: "Você realmente deseja sair?",
      subtitle: "Tudo o que você fez aqui será perdido. Você tem certeza?",
    },
    entity_created_success: "Tudo pronto! Você criou uma entidade.",
    entity_successfully_changed: "Pronto! Você alterou uma entidade.",
    unique: "Uniques",
    entity_list: "Lista de Entidades",
    cant_edit_native_entity: "Não é possível alterar entidades nativas",
    cant_update_fields_with_data:
      "Não é possível alterar atributos de uma entidade que possua dados",
    classification: "Classificação",
  },
  on: "em",
  yes: "Sim",
  remove: "remover",
  "datamodeler-bff": {
    target_entity_not_found:
      "A Foreign Key associada a Entidade é inválida. A Entidade referenciada não existe.",
    self_field_not_found:
      "A Foreign Key associada a Entidade é inválida. O atributo na Entidade não existe.",
    fk_not_found:
      "O atributo do Tipo Pesquisa não possui uma Foreign Key associada. ",
    field_not_found: "A Unique está associada a um Atributo inválido.",
    field_type_and_sub_type_invalid:
      "O SubTipo {{field_subtype}} não existe para o Tipo de Atributo {{field_type}}.",
    new_entity_not_return: "A Entidade não foi retornada pelo Banco de Dados.",
    "run-preview-not-execute":
      "Não foi possível executar a consulta dos dados da Visão",
    "error-internal-integration":
      "Não foi possível integrar com as dependências do sistema.",
    target_field_not_found:
      "A Foreign Key associada a Entidade é inválida. O Atributo referenciado é inválido.",
    field_type_not_found: "O Tipo de Atributo {{field_cvType}} não existe.",
    code_unauthorized: "Autorização inválida.",
    entity_not_found: "A Entidade {{entity_uuid}} não foi encontrada.",
  },
  field_label_updated_by: "Atualizado por",
  all_done: "Tudo pronto!",
  successfully_create: "alterado com sucesso",
  errors: {
    some_sequence_not_unique:
      "Todos os atributos do tipo auto numeração devem ser uniques",
    invalid_limit_max: "O limite máximo não pode ser menor que o limite mínimo",
    fail_duplicated_attribute: "Atributo já existe na entidade",
    first_white_space: "Não é possível iniciar o campo com espaço",
    entity_name_already_exists: "Nome da entidade já existe",
    invalid_limit_min: "O limite mínimo não pode ser maior que o limite máximo",
    invalid_characters: "Caracteres inválidos",
    invalid_regex: "Regex inválido",
    duplicated_attribute: "O atributo {{attribute}} já existe nesta entidade.",
  },
  dm: {
    wizard: {
      attributes_step: {
        table: {
          empty_state: {
            title: "Adicione seu primeiro atributo",
          },
        },
      },
    },
  },
  back: "Voltar",
  next: "Próximo",
  no: "Não",
  view_builder: {
    stepper: {
      entities_attrs: {
        title: "Entidades e Atributos",
        aval: "Atributos Disponíveis",
        entities: "Entidades",
        aval_empty: "Sem entidade para selecionar",
        selected_empty: "Nenhuma entidade adicionada ainda",
        selected: "Atributos Selecionados",
        subtitle: "Selecione as entidades e seus atributos",
        not_found: "Sem entidades encontradas chamadas",
      },
      relationships: {
        title: "Relacionamentos",
      },
      filters: {
        title: "Filtros",
      },
      data_view: {
        title: "Visualização dos Dados",
      },
      basic_infos: {
        title: "Informações Básicas",
        subtitle: "Informações básicas da visão",
      },
    },
  },
  field_label_updated_at: "Atualizado em",
  entity: {
    last_change: "Última Atualização",
    created_by: "Criado por",
    create_new_entity: "Criar Nova Entidade",
    create_and_manage_entities: "Crie e Gerencie Entidades Facilmente",
    attributes: "Atributos",
    entity_type_native: "Nativa",
    mandatory: "Obrigatório",
    label: "Rótulo",
    search_your_entities: "Buscar por...",
    data_modeler_description:
      "Este é o seu espaço para criar novas entidades ou editar as criadas anteriormente. As alterações aqui não afetarão as entidades ativas sincronizadas.",
    entity_type_custom: "Personalizada",
    entity_type_synced: "Sincronizada",
    last_change_made_by: "Última alteração feita por",
    no_group_relationships: "Nenhum Grupo relacionado",
    description: "Descrição",
    groups_entity: "Grupos da Entidade",
    related_groups: "Grupos Relacionados",
    details: "Detalhes",
    field_type: "Tipo",
    attributes_table: {
      empty_state: {
        description:
          "Essa entidade não possui nenhum atributo registrado ou relacionado",
        title: "Sem Atributos",
      },
    },
    message_new_group: "Pressione enter para adicionar",
    no_entities_created: "Nenhuma Entidade criada ainda",
    group: "Grupo",
    entity_type: "Tipo da Entidade",
  },
  continue: "Continuar",
  cancel: "Cancelar",
  field_description_created_at:
    "Atributo utilizado para armazenar a data de criação do registro.",
  go_back: "Voltar",
  details: {
    uniques: {
      type: "Tipo",
      attribute: "Atributo",
      unique_group: "Unique Grupo",
    },
  },
  modal: {
    delete_entity_label: "Digite “Excluir” para confirmar",
    delete_entity_title: "Excluir esta Entidade?",
    cant_delete_entity_title: "Impossível Excluir!",
    delete_entity_helper: "Você deve digitar a palavra para confirmar a ação",
    delete_entity_success: "Entidade excluída com sucesso",
    delete_entity_subtitle:
      "Você perderá todas as suas configurações e isso não pode ser desfeito!",
    cant_delete_entity_subtitle:
      "Não é possível excluir uma entidade que possui registros (dados).",
    delete_entity_error: "A palavra não combina!",
  },
  at: "as",
  data_modeler: "Data Modeler",
  finish: "Finalizar",
  deactivated_user: "usuário desativado",
  pagination: {
    moreThan: "Mais do que",
    of: "de",
    labelRowsPerPage: "linhas por página",
    backIconButtonText: "Página anterior",
    nextPage: "Próxima página",
  },
  page_not_found: "Página não encontrado",
  successfully_created: "criado com sucesso",
  field_description_deleted:
    "Atributo utilizado para apresentar se o registro está deletado logicamente.",
  companyapi: {
    invalid_token: "Token inválido",
    data_operation_failed: "Falha ao realizar operação na Data API.",
    field_is_blank: "Campo {{field}} não pode ser vazio ou nulo.",
    connection_failed: "Falha de integração com Data API.",
    field_is_empty: "Campo {{field}} não pode ser vazio.",
    field_size_invalid:
      "Campo {{field}}, tamanho deve ser entre {{min}} e {{max}}.",
  },
  close: "Fechar",
  entity_details: {
    attributes_drawer: {
      title: "Detalhes do Atributo",
    },
  },
  validation: {
    step_entity: {
      enter_label: "Insira um valor",
      enter_group: "Insira um grupo",
      min_length: "Desculpe, muito pequeno. Use pelo menos 3 caracteres",
    },
  },
  entity_list: {
    filters: {
      all: "Todas",
      custom: "Personalizadas",
      native: "Nativas",
      group: "Grupo",
    },
  },
  field_label_deleted: "Excluído",
  edit: "Editar",
  order: {
    entity_label: "Rótulo da Entidade",
    last_update: "Ultima Atualização",
    last_create: "Última Criação",
  },
  add: "adicionar",
  remove_all: "remover todos",
  field_description_starts_with_blank_space:
    "A Descrição do Atributo <field_label> não pode iniciar com espaço em branco.",
  columns: "Colunas",
  order_by: "Ordernar por",
  delete: "Excluir",
  internal_error: "Erro interno no servidor",
  sucessfully_created: "criado com sucesso",
  mongodata: {
    connector_failed: "MongoDataConnector - falha de conexão.",
  },
  required: "Este campo é obrigatório",
  attribute_name: "Nome do atributo",
  add_all: "adicionar todos",
  last_changes: "Últimas modificações em",
  field_label_created_by: "Criado por",
  groups: "Grupos",
  field_label_created_at: "Criado em",
  successfully_changed: "alterado com sucesso",
  reader: {
    connector_failed: "ReaderAPI - falha de conexão",
  },
  entity_list_error: "Não foi possível recuperar as entidades",
  field_description_updated_at:
    "Atributo utilizado para armazenar a data de atualização do registro.",
  field_description_created_by:
    "Atributo utilizado para armazenar o usuário de criação do registro.",
  helper_text: {
    step_entity: {
      label: "Definir rótulos para identificar a entidade no Data Modeler",
    },
  },
  leave: "Sair",
  field_description_updated_by:
    "Atributo utilizado para armazenar o usuário de atualização do registro.",
  exit: "Sair",
};

const wos = {
  property: {
    helper: {
      type: "Tipo do Workflow",
      action: "Selecione uma ação",
      response:
        "Você precisa selecionar uma conexão e operação para mostrar os campos aqui",
      operation: "Tipo de operação",
      external_connection: "Tipo de conexão para conectar com os valores",
      stop_case_progress:
        "O caso que está sendo apresentado em tela para o atendente tem o progresso suspenso, não prosseguindo com o fluxo.",
      case_scheduling_date: "Data desejada para agendamento",
      to: "Responsável que irá receber esta mensagem",
      cc: "Destinatários em cópia",
      destination_contact: "Contato de destino para o reagendamento",
      content: "Mensagem a ser representada no envio",
      destination: "Número de telefone a ser acionado para o destinatário",
      reason_helper_text: "Selecione o motivo do fechamento do caso",
      comment: "Breve descritivo do motivo do reagendamento",
      business_unit: "Seleção de Unidade de Negócio",
      channel_name: "Lista de canais do Tenant",
      external_connection_type:
        "Tipo de conexão que será usada para conectar com os valores",
      unlink_function: "Remover Link",
      responsible_for_scheduling: "Usuário que cadastrou o agendamento",
      unnamed_function: "Sem nome",
      edit_function: "Editar",
      server_digital: "Server Digital para envio de mensagem.",
      delete_function: "Remover",
      request:
        "Você precisa selecionar uma conexão e operação para mostrar os campos aqui",
      case_close_reason_helper_text:
        "Função para setar o motivo da razão para o fechamento de um caso após uma ação",
      cco: "Destinatários em modo oculto de cópia",
      server_digital_for_mail: "Server Digital para envio de email.",
      action_helper_text:
        "Lista de ações adicionadas com links para este status:",
      sender: "Nome do remetente dessa mensagem",
      service_channel: "Canal de atendimento",
      server_digital_for_sms: "Server Digital para envio de email",
      flush_case_helper_text:
        "Função criada para atualizar o contexto de Case e Case Datails dentro do fluxo de ação quando são recebidos valores externos como por exemplo: Formulários do CSM, Plugins, etc.",
      attachment: "Anexar um arquivo a mensagem",
      workflow_name: "Nome do Workflow",
      service_queue_id:
        "Código identificador da fila de atendimento na telefonia",
      key_for_mail: "Chave para execução de envio de email.",
      status: "Insira um Status aqui",
      case_type: "Tipo de caso relacionado à unidade de negócio",
      subject: "Assunto da mensagem",
      key_for_sms: "Chave para execução de envio de mensagem.",
      new_action: "Nova ação",
      reason: "Selecione o motivo do fechamento do caso",
      remove_current_assign:
        "Usuário assinado no caso deixa de ser o responsável pela atividade",
      status_helper_text:
        "Lista de ações adicionadas com vinculos para este status",
    },
    request: "Nome do campo",
    no_fields_listed: "Nenhum campo listado",
    key_for_sms: "Chave",
    send_sms_helper_text:
      "Você pode adicionar variáveis nos campos abaixo usando marcações como @Name",
    server_digital: "Server Digital",
    flush_case_helper_text:
      "Função criada para atualizar o contexto de Case e Case Datails dentro do fluxo de ação quando são recebidos valores externos como por exemplo: Formulários do CSM, Plugins, etc.",
    service_channel: "Canal de atendimento",
    sender: "Nome de exibição do remetente",
    content: "Mensagem",
    comment: "Comentário",
    destination_contact: "Contato de destino",
    workflow_name: "Nome do Workflow",
    stop_case_progress: "Parar o progresso do caso",
    external_connection: "Conexão",
    response: "Nome do campo",
    reason: "Razão",
    key_for_mail: "Chave",
    send_mail_helper_text:
      "Você pode adicionar variáveis nos campos abaixo usando marcações como @Name",
    status: "Status",
    type: "Tipo do Workflow",
    helper_text: {
      empty: "vazio",
    },
    to: "Para",
    operation: "Operação",
    status_helper_text: "Este status não tem ações",
    new_action: "Adicionar nova ação",
    external_connection_type: "Integração",
    cc: "CC",
    case_close_reason_helper_text:
      "Função para setar o motivo da razão para o fechamento de um caso após uma ação",
    action: "Ação",
    action_helper_text: "Este status não tem ações",
    remove_current_assign: "Remover Atribuição Atual",
    service_queue_id: "Id da fila de atendimento",
    attachment: "Anexo",
    business_unit: "BU",
    server_digital_for_mail: "Server Digital",
    case_type: "Tipo de Caso",
    responsible_for_scheduling: "Responsável pelo agendamento",
    server_digital_for_sms: "Server Digital",
    subject: "Assunto",
    channel_name: "Nome do Canal",
    destination: "Número de destino",
    actions: "Você precisa adicionar ações neste estado para mostrá-las aqui.",
    case_scheduling_date: "Data de agendamento do caso",
    cco: "CCO",
  },
  modals: {
    delete: {
      error: "Você deve digitar Delete para confirmar a ação",
      placeholder: "Digite Deletar para confirmar",
      title: "Excluir este Fluxo?",
      delete: "Deletar",
      subtitle:
        "Você perderá todas as suas configurações e isso não pode ser desfeito!",
      button: "Deletar",
      helper_text: "Você deve digitar Deletar para confirmar a ação",
    },
    connectionErrorModal: {
      title: "A função não pode ser adicionada",
      cancel: "Cancelar",
      subtitle: "A função {{source}} não pode ser conectada a {{target}}",
      button: "Ok",
    },
    clone: {
      label: "Clonar este Workflow?",
      error: {
        name_already_in_use: "Este nome já está em uso.",
        required: "Não pode ser vazio!",
        no_special_symbols: "Caracteres especiais não são permitidos",
        max_length: "No máximo 100 caracteres!",
        min_length: "No mínimo 3 caracteres!",
      },
      placeholder: "Nome do Clone do Workflow",
      confirm: "Clonar Fluxo",
      title: "Clonar este Workflow?",
      helper_text: "Digitando um novo nome para clone do Workflow",
      subtitle:
        "Para clonar este fluxo você precisa escolher um novo nome para representar este Workflow",
    },
    inactive: {
      button: "Inativar",
      title: "Inativar este Fluxo?",
      subtitle:
        "Inativando este Workflow ele não estará mais acessível por outros aspectos!",
    },
    publishNotPossible: {
      cancel: "Cancelar",
      button: "Ok",
      title: "Publicação não é possível",
      subtitle:
        "Para publicar é necessário que as seguintes funções adicionadas estejam devidamente configuradas:",
    },
    publish: {
      title: "Publicar Workflow",
      subtitle:
        "Após a confirmação você será redirecionado para a listagem, enquanto preparamos seu fluxo de trabalho para operação. Você poderá ver seu progresso nos status.",
      cancel: "Cancelar",
      button: "Publicar",
    },
    saving: {
      description: "Estamos salvando todas as suas alterações que foram feitas",
      title: "Salvando fluxo de trabalho",
    },
    button: {
      cancel: "Cancelar",
    },
  },
  function: {
    session: {
      basic_request: "Solicitação",
      basic_send_mail: "Propriedades da Função",
      basic_action: "Propriedades de Ação",
      basic_response: "Resposta",
      basic_send_sms: "Propriedades da Função",
      action_status: "Ações",
      request_integration: "Solicitação",
      basic_send_email: "Propriedades da Função",
      basic_imperative_start: "Propriedades de Iniciar",
      basic_case_scheduling: "Propriedades da Função",
      response_integration: "Resposta",
      basic_case_close_reason: "Propriedades da Função",
      basic_integration: "Propriedades da Função",
      basic_status: "Propriedades de Status",
      basic_flush_case: "Propriedades da Função",
    },
    send_mail: "Enviar email",
    set_case_reason: "Definir Motivo",
    declarative_start: "Inicia com",
    confirm: "Salvar Alterações",
    case_close_reason: "Motivo de Fechamento",
    status: "Status",
    integration: "Integração",
    case_scheduling: "Agendamento do caso",
    imperative_start: "Iniciar",
    action: "Ação",
    send_sms: "Enviar SMS",
    set_case_reason_helper_text:
      "Selecione o estado do motivo que você precisa definir:",
    flush_case: "Atualizar Caso e Detalhes",
  },
  drawer: {
    create: {
      button: {
        create: "Criar Workflow",
        cancel: "Cancelar",
      },
      states: {
        description:
          "Crie um fluxo e possíveis caminhos de trabalho por meio de mudanças de status",
        title: "Com Estados",
      },
      events: {
        description: "Crie um fluxo que reage a eventos e ações programadas",
        title: "Com Eventos",
      },
      label: "Nome do Workflow",
      error: {
        required: "Não pode ser vazio!",
        max_length: "No máximo 100 caracteres!",
        no_special_symbols: "Caracteres especiais não são permitidos",
        name_already_in_use: "Este nome já está em uso.",
        min_length: "No mínimo 3 caracteres!",
      },
      question: "Selecione o tipo de fluxo de trabalho que deseja criar",
      name: "Nome do Workflow",
      title: "Criar novo Workflow",
    },
    textarea: {
      clear_all: "Limpar tudo",
      cancel: "Cancelar",
      expand: "Expandir Mensagem",
      label: "Campo de mensagem expandido, mudanças serão replicadas",
      confirm: "Confirmar",
    },
    binding: {
      title: "Amarração",
      cancel: "Cancelar",
      confirm: "Finalizar",
      entities: "Entidades",
      clear_all: "Limpar Tudo",
      helper_text:
        "Selecione Variáveis ou Condições para vincular este campo, você também pode adicionar vinculação usando @Name no campo",
    },
  },
  cpp: {
    invalid_json:
      "Falhou a execução do workflow, json inválido para realizar a operação: {{operation}}.",
    timeout:
      "Falhou a execução do workflow, estouro de tempo na operação: {{operation}}.",
    property_not_found:
      "Falhou a execução do workflow, propriedade {{property}} não foi encontrada.",
    failed_execution: "Falhou a execução do workflow, erro: {{error}}.",
  },
  validation: {
    mandatory_case_scheduling_date: "Preenchimento obrigatório",
    max_length_subject: "Preenchimento obrigatório",
    mandatory_service_queue_id: "Preenchimento obrigatório",
    number_destination: "Preenchimento obrigatório",
    max_length_comment: "Preenchimento obrigatório",
    mail_to: "Preenchimento obrigatório",
    max_length_content: "Preenchimento obrigatório",
    mandatory_destination_contact: "Preenchimento obrigatório",
    mail: "Formato de email inválido",
    mandatory: "O campo não pode ser nulo ou vazio",
    mandatory_service_channel: "Preenchimento obrigatório",
  },
  error: {
    boundary: {
      properties: {
        description:
          "Ocorreu um erro inesperado, tente selecionar a função novamente!",
        title: "Coordenadas perdidas",
      },
      home: {
        description: "Ocorreu um erro inesperado, tente novamente!",
        title: "Erro ao carregar a lista de Workflows",
        buttonText: "Atualizar lista de Workflow",
      },
      description:
        "Se o erro persistir entre em contato com o administrador do sistema",
      buttonText: "Tentar Novamente",
      title: "Falha ao carregar dados",
    },
  },
  clone: {
    error: "Erro ao clonar o workflow.",
  },
  workflow: {
    last_edited_by:
      "Última edição por {{lastModifiedUser}} em {{lastModifiedDate}}",
    list: "Listar Fluxos",
    edit: {
      drop_action: "Solte uma <0>ação</0> aqui, para iniciar </1> seu workflow",
      drag_action:
        "Arraste uma <0>ação</0> aqui, para iniciar </1> seu workflow",
    },
    builder: {
      error: {
        max_length: "No máximo 100 caracteres!",
        name_already_in_use: "Este nome já está em uso.",
        no_special_symbols: "Caracteres especiais não são permitidos",
        required: "Não pode ser vazio!",
        min_length: "No mínimo 3 caracteres!",
      },
      action_empty_description: "Não há ação disponível para este fluxo.",
      save_workflow: "Salvar fluxo de trabalho",
      action_empty_title: "Nenhuma ação disponível.",
      publish: "Publicar",
    },
    type: {
      imperative: "Imperativo",
      declarative: "Declarativo",
    },
    publishing_message: "Aguarde enquanto terminamos de publicar este workflow",
  },
  redirect: {
    error: "Erro ao redirecionar",
  },
  case_scheduling_function_error:
    "Erro no sistema, não foi possível agendar o caso.",
  canvas: {
    toolbar: {
      actualZoom: "Zoom atual",
      zoomToFit: "Ajustar Zoom",
      zoomIn: "Aumentar Zoom",
      zoomOut: "Reduzir o zoom",
    },
  },
  create: {
    error: "Erro ao criar o workflow.",
  },
  snackbar: {
    load18nError: {
      message: "Alguns caracteres de texto não foram devidamente carregados",
      refresh: "Atualizar",
    },
    saved: "Fluxo de trabalho salvo com sucesso!",
    deleted: "foi deletado com sucesso",
    publishing:
      "Este Workflow está sendo publicado, não é possível fazer alterações",
    created: "foi criado com sucesso",
    cloned: "Fluxo clonado com sucesso",
    saveError: "Não foi possível salvar o fluxo de trabalho",
    inactivated: "foi inativado com sucesso",
    published: "foi publicado com sucesso",
    open: "Abrir",
  },
  workflowconfig: {
    platform_value:
      "Chave de parâmetro de plataforma {{key}} para {{property}} não encontrada.",
    mandatory_property_not_found: "Campos mandatórios não foram encontrados.",
    not_found: "Entidade {{entity}} não encontrada com o id {{id}}",
    publish_error:
      "Erro para publicar workflow {{workflowId}} com versão {{workflowVersion}}.",
    not_ready_to_publish:
      "O workflow {{workflowName}} com versão {{workflowVersion}} não está pronto para ser publicado.",
    unauthorized_token: "Autorização inválida.",
    duplicated_key: "Chave duplicada para entidade {{workflowName}}.",
    outdated_version:
      "O workflow {{workflowName}} com a versão {{workflowVersion}} está desatulizado.",
    duplicated_publish:
      "O workflow {{workflowName}} com a versão {{workflowVersion}} já está sendo publicado.",
    external_connection_param_not_found:
      "Não foi possível realizar a conexão externa com o tipo {{type}}, por favor tente novamente.",
    property_not_found: "A propriedade {{Property}} não foi encontrada.",
    publish_workflow: "Estamos processando a publicação do seu workflow.",
    publishing_error:
      "O workflow {{workflowId}} está sendo publicado no momento, por favor aguarde.",
  },
  filter: {
    clear_all: "Todos os Fluxos",
    publishing_error: "Erro ao tentar publicar",
    created: "Criado",
    building: "Em Construção",
    published: "Publicado",
    publishing: "Publicando",
    inactive: "Inativado",
  },
  manage_flows_description:
    "Simplifique e Otimize seus fluxos de trabalho, criando e gerenciando seus fluxos de forma rápida e visual reduzindo a quantidade de erros e etapas desnecessárias.",
  category: {
    case: "Casos",
    operation: "Operação",
    logic_and_flow: "Lógica e Fluxo",
    general: "Geral",
    communication: "Comunicação",
    starter: "Inicializador",
  },
  builder: {
    branches: {
      add: "Adicionar nova Branch",
      subtitle: "Lista de Branches adicionadas para a execução desta função:",
      title: "Branches",
      validations: {
        required: "Campo obrigatório",
        name_already_in_use: "Nome em uso",
      },
    },
  },
  sort: {
    recently_added: "Adicionados Rencentemente",
    alphabetical_order: "Ordem Alfabética",
    last_update: "Últimas Atualizações",
  },
  send_mail_function_error: "Erro no sistema, não foi possível enviar o email.",
  no_results: "Nenhum Fluxo de Tarefas foi criado ainda.",
  integration_function_error:
    "Um erro ocorreu ao conectar com um sistema externo.",
  menu: {
    delete: "Deletar",
    clone: "Clone this Flow",
    edit: "Editar",
    inactive: "Inativar",
    button: {
      publishflow: "Publicar Fluxo",
    },
  },
  flush_case_function_error:
    "Erro no sistema, não foi possível salvar os dados do caso.",
  fetch: {
    error: "Erro ao buscar informações",
  },
  order_by: "Ordernar por",
  platformValues: {
    error: "Erro ao carregar dados, tente novamente",
  },
  publishing_tooltip_card:
    "Aguarde enquanto terminamos de publicar este workflow",
  manage_flows_title: "Gerencie seus fluxos de forma simplificada",
  workflowaggregator: {
    not_found:
      "Não foi encontrado workflow para execução com {{status}} status e ação {{action}}.",
  },
  last_update: "Últimas alterações",
  no_results_found: "Não foram encontrados Workflows",
  create_new_first: "Criar seu primeiro Workflow",
  manage_flows_subtitle: "Gerenciamento de Workflow",
  status_function_error:
    "Erro no sistema, não foi possível alterar o status do caso.",
  inactivate: {
    error: "Erro ao inativar o workflow.",
  },
  no_results_found_description: "Verifique a ortografia ou tente outra palavra",
  update: {
    error: "Erro ao atualizar o workflow.",
  },
  workflowengine: {
    failed_case_scheduling: "Falhou reagendamento para caso {{case}}.",
  },
  search: "Buscar por...",
  send_sms_function_error: "Erro no sistema, não foi possível enviar o SMS.",
  delete: {
    error: "Erro ao deletar o workflow.",
  },
  create_new: "Criar novo Workflow",
};

export { csm, crm, dm, wos };

function configMaster($stateProvider) {

    $stateProvider

    /*-----------------------------------------
    mpart~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.mpart', {
        url: "/mpart",
        templateUrl: "views/master/mpart/data.html",
        data: { pageTitle: 'mpart' },
        controller:"master.mpart"
    })

    .state('master.mpart.add', {
        url: "/mpart",
        templateUrl: "views/master/mpart/add.html",
        data: { pageTitle: 'mpart' },
        controller:"master.mpart.add"
    })

    .state('master.mpart.edit', {
        url: "/edit/:id_mpart",
        templateUrl: "views/master/mpart/edit.html",
        data: { pageTitle: 'mpart' },
        controller:"master.mpart.edit"
    })

        .state('master.mpart.detail', {
            url: "/detail/:id_mpart",
            templateUrl: "views/master/mpart/detail.html",
            data: { pageTitle: 'detail' },
            controller:"master.mpart.detail"
        })
        //* ------------------ ROUTINE -------------------*//
        .state('master.mpart.detail.routine', {
            url: "/routine",
            templateUrl: "views/master/mpart/routine/data.html",
            data: { pageTitle: 'routine' },
            controller:"master.mpart.detail.routine"
        })

        .state('master.mpart.detail.routine.add', {
            url: "/add",
            templateUrl: "views/master/mpart/routine/add.html",
            data: { pageTitle: 'add' },
            controller:"master.mpart.detail.routine.add"
        })
        .state('master.mpart.detail.routine.edit', {
            url: "/edit/:id_maintenance",
            templateUrl: "views/master/mpart/routine/edit.html",
            data: { pageTitle: 'edit' },
            controller:"master.mpart.detail.routine.edit"
        })

        //* ------------------ INSPECTION -------------------*//
        // .state('master.mpart.detail.inspection', {
        //     url: "/inspection",
        //     templateUrl: "views/master/mpart/inspection/data.html",
        //     data: { pageTitle: 'inspection' },
        //     controller:"master.mpart.detail.inspection"
        // })
        // .state('master.mpart.detail.inspection.add', {
        //     url: "/add",
        //     templateUrl: "views/master/mpart/inspection/add.html",
        //     data: { pageTitle: 'add' },
        //     controller:"master.mpart.detail.inspection.add"
        // })
        // .state('master.mpart.detail.inspection.edit', {
        //     url: "/edit/:id_maintenance",
        //     templateUrl: "views/master/mpart/inspection/edit.html",
        //     data: { pageTitle: 'edit' },
        //     controller:"master.mpart.detail.inspection.edit"
        // })

    /*-----------------------------------------
     actype~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.actype', {
        url: "/actype",
        templateUrl: "views/master/actype/data.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype"
    })
    .state('master.actype.detail', {
        url: "/detail/:id_actype",
        templateUrl: "views/master/actype/data.detail.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype.detail"
    })
    .state('master.actype.add', {
        url: "/actype",
        templateUrl: "views/master/actype/add.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype.add"
    })

    .state('master.actype.edit', {
        url: "/edit/:id_actype",
        templateUrl: "views/master/actype/edit.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype.edit"
    })

    /*-----------------------------------------
     Aircraft~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.aircraft', {
        url: "/aircraft",
        templateUrl: "views/master/aircraft/data.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft"
    })
    .state('master.aircraft.detail', {
        url: "/detail/:id_aircraft",
        templateUrl: "views/master/aircraft/data.detail.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft.detail"
    })
    .state('master.aircraft.add', {
        url: "/aircraft",
        templateUrl: "views/master/aircraft/add.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft.add"
    })

    .state('master.aircraft.edit', {
        url: "/edit/:id_aircraft",
        templateUrl: "views/master/aircraft/edit.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft.edit"
    })

    /*-----------------------------------------
     Ata Chapter ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.ata', {
        url: "/ata",
        templateUrl: "views/master/ata/data.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata"
    })
    .state('master.ata.detail', {
        url: "/detail/:id_ata",
        templateUrl: "views/master/ata/data.detail.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata.detail"
    })
    .state('master.ata.add', {
        url: "/ata",
        templateUrl: "views/master/ata/add.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata.add"
    })

    .state('master.ata.edit', {
        url: "/edit/:id_ata",
        templateUrl: "views/master/ata/edit.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata.edit"
    })

    /*-----------------------------------------
     Maintenance Code ~~~~~~~~~~~~~~~~Mulai koding
     /*---------------------------------------*/
        .state('master.maintenance', {
            url: "/maintenance",
            templateUrl: "views/master/maintenance/data.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance"
        })
        .state('master.maintenance.detail', {
            url: "/detail/:id_maintenance_code",
            templateUrl: "views/master/maintenance/data.detail.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance.detail"
        })
        .state('master.maintenance.add', {
            url: "/maintenance",
            templateUrl: "views/master/maintenance/add.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance.add"
        })

        .state('master.maintenance.edit', {
            url: "/edit/:id_maintenance_code",
            templateUrl: "views/master/maintenance/edit.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance.edit"
        })

    /*-----------------------------------------
    group~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.group', {
        url: "/group",
        templateUrl: "views/master/group/data.html",
        data: { pageTitle: 'group' },
        controller:"master.group"
    })
    .state('master.group.detail', {
        url: "/detail/:id_group",
        templateUrl: "views/master/group/data.detail.html",
        data: { pageTitle: 'group' },
        controller:"master.group.detail"
    })
    .state('master.group.add', {
        url: "/add",
        templateUrl: "views/master/group/add.html",
        data: { pageTitle: 'group' },
        controller:"master.group.add"
    })

    .state('master.group.edit', {
        url: "/edit/:id_group",
        templateUrl: "views/master/group/edit.html",
        data: { pageTitle: 'group' },
        controller:"master.group.edit"
    })

    /*-----------------------------------------
    condition_monitoring~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.condition_monitoring', {
        url: "/condition_monitoring",
        templateUrl: "views/master/condition_monitoring/data.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring"
    })
    .state('master.condition_monitoring.detail', {
        url: "/detail/:id_condition_monitoring",
        templateUrl: "views/master/condition_monitoring/data.detail.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring.detail"
    })
    .state('master.condition_monitoring.add', {
        url: "/add",
        templateUrl: "views/master/condition_monitoring/add.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring.add"
    })

    .state('master.condition_monitoring.edit', {
        url: "/edit/:id_condition_monitoring",
        templateUrl: "views/master/condition_monitoring/edit.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring.edit"
    })

    /*-----------------------------------------
    life_time_limit~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.life_time_limit', {
        url: "/life_time_limit",
        templateUrl: "views/master/life_time_limit/data.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit"
    })
    .state('master.life_time_limit.detail', {
        url: "/detail/:id_life_time_limit",
        templateUrl: "views/master/life_time_limit/data.detail.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit.detail"
    })
    .state('master.life_time_limit.add', {
        url: "/add",
        templateUrl: "views/master/life_time_limit/add.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit.add"
    })

    .state('master.life_time_limit.edit', {
        url: "/edit/:id_life_time_limit",
        templateUrl: "views/master/life_time_limit/edit.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit.edit"
    })

    /*-----------------------------------------
    part_category~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.part_category', {
        url: "/part_category",
        templateUrl: "views/master/part_category/data.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category"
    })
    .state('master.part_category.detail', {
        url: "/detail/:id_part_category",
        templateUrl: "views/master/part_category/data.detail.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category.detail"
    })
    .state('master.part_category.add', {
        url: "/add",
        templateUrl: "views/master/part_category/add.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category.add"
    })

    .state('master.part_category.edit', {
        url: "/edit/:id_part_category",
        templateUrl: "views/master/part_category/edit.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category.edit"
    })

    /*-----------------------------------------
    part_condition~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.part_condition', {
        url: "/part_condition",
        templateUrl: "views/master/part_condition/data.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition"
    })
    .state('master.part_condition.detail', {
        url: "/detail/:id_part_condition",
        templateUrl: "views/master/part_condition/data.detail.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition.detail"
    })
    .state('master.part_condition.add', {
        url: "/part_condition",
        templateUrl: "views/master/part_condition/add.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition.add"
    })

    .state('master.part_condition.edit', {
        url: "/edit/:id_part_condition",
        templateUrl: "views/master/part_condition/edit.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition.edit"
    })

    /*-----------------------------------------
    partid~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.partid', {
        url: "/partid",
        templateUrl: "views/master/partid/data.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid"
    })
    .state('master.partid.detail', {
        url: "/detail/:id_partid",
        templateUrl: "views/master/partid/data.detail.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid.detail"
    })
    .state('master.partid.add', {
        url: "/partid",
        templateUrl: "views/master/partid/add.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid.add"
    })

    .state('master.partid.edit', {
        url: "/edit/:id_partid",
        templateUrl: "views/master/partid/edit.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid.edit"
    })

    /*-----------------------------------------
    position~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.position', {
        url: "/position",
        templateUrl: "views/master/position/data.html",
        data: { pageTitle: 'position' },
        controller:"master.position"
    })
    .state('master.position.detail', {
        url: "/detail/:id_position",
        templateUrl: "views/master/position/data.detail.html",
        data: { pageTitle: 'position' },
        controller:"master.position.detail"
    })
    .state('master.position.add', {
        url: "/position",
        templateUrl: "views/master/position/add.html",
        data: { pageTitle: 'position' },
        controller:"master.position.add"
    })

    .state('master.position.edit', {
        url: "/edit/:id_position",
        templateUrl: "views/master/position/edit.html",
        data: { pageTitle: 'position' },
        controller:"master.position.edit"
    })

    /*-----------------------------------------
    site~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.site', {
        url: "/site",
        templateUrl: "views/master/site/data.html",
        data: { pageTitle: 'site' },
        controller:"master.site"
    })
    .state('master.site.detail', {
        url: "/detail/:id_site",
        templateUrl: "views/master/site/data.detail.html",
        data: { pageTitle: 'site' },
        controller:"master.site.detail"
    })
    .state('master.site.add', {
        url: "/site",
        templateUrl: "views/master/site/add.html",
        data: { pageTitle: 'site' },
        controller:"master.site.add"
    })

    .state('master.site.edit', {
        url: "/edit/:id_site",
        templateUrl: "views/master/site/edit.html",
        data: { pageTitle: 'site' },
        controller:"master.site.edit"
    })

    /*-----------------------------------------
    type_ofwork~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.type_ofwork', {
        url: "/type_ofwork",
        templateUrl: "views/master/type_ofwork/data.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork"
    })
    .state('master.type_ofwork.detail', {
        url: "/detail/:id_type_ofwork",
        templateUrl: "views/master/type_ofwork/data.detail.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork.detail"
    })
    .state('master.type_ofwork.add', {
        url: "/type_ofwork",
        templateUrl: "views/master/type_ofwork/add.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork.add"
    })

    .state('master.type_ofwork.edit', {
        url: "/edit/:id_type_ofwork",
        templateUrl: "views/master/type_ofwork/edit.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork.edit"
    })

    /*-----------------------------------------
      Pendidikan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pendidikan', {
        url: "/pendidikan",
        templateUrl: "views/master/pendidikan/data.html",
        data: { pageTitle: 'pendidikan' },
        controller:"master.pendidikan"
    })
    .state('master.pendidikan.add', {
        url: "/create",
        templateUrl: "views/master/pendidikan/add.html",
        data: { pageTitle: 'add pendidikan' },
        controller:"master.pendidikan.add"
    })

    .state('master.pendidikan.edit', {
        url: "/edit/:id_pendidikan",
        templateUrl: "views/master/pendidikan/edit.html",
        data: { pageTitle: 'edit pendidikan' },
        controller:"master.pendidikan.edit"
    })

    /*-----------------------------------------
      Pekerjaan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pekerjaan', {
        url: "/pekerjaan",
        templateUrl: "views/master/pekerjaan/data.html",
        data: { pageTitle: 'pekerjaan' },
        controller:"master.pekerjaan"
    })
    .state('master.pekerjaan.add', {
        url: "/create",
        templateUrl: "views/master/pekerjaan/add.html",
        data: { pageTitle: 'add pekerjaan' },
        controller:"master.pekerjaan.add"
    })

    .state('master.pekerjaan.edit', {
        url: "/edit/:id_pekerjaan",
        templateUrl: "views/master/pekerjaan/edit.html",
        data: { pageTitle: 'edit pekerjaan' },
        controller:"master.pekerjaan.edit"
    })

    /*-----------------------------------------
      Mapel ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.mapel', {
        url: "/mapel",
        templateUrl: "views/master/mapel/data.html",
        data: { pageTitle: 'mata pelajaran' },
        controller:"master.mapel"
    })
    .state('master.mapel.add', {
        url: "/create",
        templateUrl: "views/master/mapel/add.html",
        data: { pageTitle: 'add mata pelajaran' },
        controller:"master.mapel.add"
    })

    .state('master.mapel.edit', {
        url: "/edit/:id_mata_pelajaran",
        templateUrl: "views/master/mapel/edit.html",
        data: { pageTitle: 'edit mata pelajaran' },
        controller:"master.mapel.edit"
    })

    /*-----------------------------------------
      Jenis nilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.jn', {
        url: "/jn",
        templateUrl: "views/master/jn/data.html",
        data: { pageTitle: 'jenis nilai' },
        controller:"master.jn"
    })
    .state('master.jn.add', {
        url: "/create",
        templateUrl: "views/master/jn/add.html",
        data: { pageTitle: 'add jenis nilai' },
        controller:"master.jn.add"
    })

    .state('master.jn.edit', {
        url: "/edit/:id_jenis_nilai",
        templateUrl: "views/master/jn/edit.html",
        data: { pageTitle: 'edit jenis nilai' },
        controller:"master.jn.edit"
    })

    /*-----------------------------------------
      Absen ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absen', {
        url: "/absen",
        templateUrl: "views/master/absen/data.html",
        data: { pageTitle: 'absen' },
        controller:"master.absen"
    })
    .state('master.absen.add', {
        url: "/create",
        templateUrl: "views/master/absen/add.html",
        data: { pageTitle: 'add absen' },
        controller:"master.absen.add"
    })

    .state('master.absen.edit', {
        url: "/edit/:id_m_absen",
        templateUrl: "views/master/absen/edit.html",
        data: { pageTitle: 'edit absen' },
        controller:"master.absen.edit"
    })    

    /*-----------------------------------------
      Pnilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pnilai', {
        url: "/pnilai",
        templateUrl: "views/master/pnilai/data.html",
        data: { pageTitle: 'pengaturan nilai' },
        controller:"master.pnilai"
    })
    .state('master.pnilai.add', {
        url: "/create",
        templateUrl: "views/master/pnilai/add.html",
        data: { pageTitle: 'add pengaturan nilai' },
        controller:"master.pnilai.add"
    })

    .state('master.pnilai.edit', {
        url: "/edit/:id_pengaturan_nilai",
        templateUrl: "views/master/pnilai/edit.html",
        data: { pageTitle: 'edit pengaturan nilai' },
        controller:"master.pnilai.edit"
    })

    /*-----------------------------------------
      Nilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.nilai', {
        url: "/nilai",
        templateUrl: "views/master/nilai/data.html",
        data: { pageTitle: 'nilai' },
        controller:"master.nilai"
    })
    .state('master.nilai.add', {
        url: "/create",
        templateUrl: "views/master/nilai/add.html",
        data: { pageTitle: 'nilai' },
        controller:"master.nilai.add"
    })

    .state('master.nilai.edit', {
        url: "/edit/:id_nilai",
        templateUrl: "views/master/nilai/edit.html",
        data: { pageTitle: 'nilai' },
        controller:"master.nilai.edit"
    })

    /*-----------------------------------------
      Muridkelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.muridkelas', {
        url: "/muridkelas",
        templateUrl: "views/master/muridkelas/data.html",
        data: { pageTitle: 'muridkelas' },
        controller:"master.muridkelas"
    })
    .state('master.muridkelas.detail', {
        url: "/detail/:id_murid_kelas",
        templateUrl: "views/master/muridkelas/detail.html",
        data: { pageTitle: 'detail' },
        controller:"master.muridkelas.detail"
    })
    .state('master.muridkelas.add', {
        url: "/create",
        templateUrl: "views/master/muridkelas/add.html",
        data: { pageTitle: 'add muridkelas' },
        controller:"master.muridkelas.add"
    })

    .state('master.muridkelas.edit', {
        url: "/edit/:id_murid_kelas",
        templateUrl: "views/master/muridkelas/edit.html",
        data: { pageTitle: 'edit muridkelas' },
        controller:"master.muridkelas.edit"
    })

    /*-----------------------------------------
      Murid ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.murid', {
        url: "/murid",
        templateUrl: "views/master/murid/data.html",
        data: { pageTitle: 'murid' },
        controller:"master.murid"
    })
    .state('master.murid.detail', {
        url: "/detail/:id_murid",
        templateUrl: "views/master/murid/detail.html",
        data: { pageTitle: 'detail' },
        controller:"master.murid.detail"
    })
    .state('master.murid.add', {
        url: "/create",
        templateUrl: "views/master/murid/add.html",
        data: { pageTitle: 'add murid' },
        controller:"master.murid.add"
    })

    .state('master.murid.edit', {
        url: "/edit/:id_murid",
        templateUrl: "views/master/murid/edit.html",
        data: { pageTitle: 'edit murid' },
        controller:"master.murid.edit"
    })

    /*-----------------------------------------
      Gurump ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.gurump', {
        url: "/gurump",
        templateUrl: "views/master/gurump/data.html",
        data: { pageTitle: 'guru mata pelajaran' },
        controller:"master.gurump"
    })
    .state('master.gurump.add', {
        url: "/create",
        templateUrl: "views/master/gurump/add.html",
        data: { pageTitle: 'add guru mata pelajaran' },
        controller:"master.gurump.add"
    })

    .state('master.gurump.edit', {
        url: "/edit/:id_guru_mp",
        templateUrl: "views/master/gurump/edit.html",
        data: { pageTitle: 'edit guru mata pekerjaan' },
        controller:"master.gurump.edit"
    })

    /*-----------------------------------------
      Guru ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.guru', {
        url: "/guru",
        templateUrl: "views/master/guru/data.html",
        data: { pageTitle: 'guru' },
        controller:"master.guru"
    })
    .state('master.guru.detail', {
        url: "/detail/:id_guru",
        templateUrl: "views/master/guru/detail.html",
        data: { pageTitle: 'detail' },
        controller:"master.guru.detail"
    })
    .state('master.guru.add', {
        url: "/create",
        templateUrl: "views/master/guru/add.html",
        data: { pageTitle: 'add guru' },
        controller:"master.guru.add"
    })

    .state('master.guru.edit', {
        url: "/edit/:id_guru",
        templateUrl: "views/master/guru/edit.html",
        data: { pageTitle: 'edit guru' },
        controller:"master.guru.edit"
    })

    /*-----------------------------------------
      Buku ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.buku', {
        url: "/buku",
        templateUrl: "views/master/buku/data.html",
        data: { pageTitle: 'buku' },
        controller:"master.buku"
    })
    .state('master.buku.add', {
        url: "/create",
        templateUrl: "views/master/buku/add.html",
        data: { pageTitle: 'add buku' },
        controller:"master.buku.add"
    })
    .state('master.buku.edit', {
        url: "/edit/:id_buku",
        templateUrl: "views/master/buku/edit.html",
        data: { pageTitle: 'edit buku' },
        controller:"master.buku.edit"
    })

    /*-----------------------------------------
      Absentmt ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absentmt', {
        url: "/absentmt",
        templateUrl: "views/master/absentmt/data.html",
        data: { pageTitle: 'absen tidak mmasuk tanggal' },
        controller:"master.absentmt"
    })
    .state('master.absentmt.add', {
        url: "/create",
        templateUrl: "views/master/absentmt/add.html",
        data: { pageTitle: 'add absen tidak mmasuk tanggal' },
        controller:"master.absentmt.add"
    })

    .state('master.absentmt.edit', {
        url: "/edit/:id_tidak_masuk_tanggal",
        templateUrl: "views/master/absentmt/edit.html",
        data: { pageTitle: 'edit absen tidak mmasuk tanggal' },
        controller:"master.absentmt.edit"
    })

    /*-----------------------------------------
      Absentm ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absentm', {
        url: "/absentm",
        templateUrl: "views/master/absentm/data.html",
        data: { pageTitle: 'absen tidak mmasuk' },
        controller:"master.absentm"
    })
    .state('master.absentm.add', {
        url: "/create",
        templateUrl: "views/master/absentm/add.html",
        data: { pageTitle: 'add absen tidak mmasuk' },
        controller:"master.absentm.add"
    })

    .state('master.absentm.edit', {
        url: "/edit/:id_tidak_masuk",
        templateUrl: "views/master/absentm/edit.html",
        data: { pageTitle: 'edit absen tidak mmasuk' },
        controller:"master.absentm.edit"
    })

    /*-----------------------------------------
      Absenrekap ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absenrekap', {
        url: "/absenrekap",
        templateUrl: "views/master/absenrekap/data.html",
        data: { pageTitle: 'absenrekap' },
        controller:"master.absenrekap"
    })
    .state('master.absenrekap.add', {
        url: "/create",
        templateUrl: "views/master/absenrekap/add.html",
        data: { pageTitle: 'add absenrekap' },
        controller:"master.absenrekap.add"
    })

    .state('master.absenrekap.edit', {
        url: "/edit/:id_rekap_absen",
        templateUrl: "views/master/absenrekap/edit.html",
        data: { pageTitle: 'edit absenrekap' },
        controller:"master.absenrekap.edit"
    })

    /*-----------------------------------------
      Tabsen ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.tabsen', {
        url: "/tabsen",
        templateUrl: "views/master/tabsen/data.html",
        data: { pageTitle: 'tabsen' },
        controller:"master.tabsen"
    })
    .state('master.tabsen.add', {
        url: "/create",
        templateUrl: "views/master/tabsen/add.html",
        data: { pageTitle: 'add tabsen' },
        controller:"master.tabsen.add"
    })

    .state('master.tabsen.edit', {
        url: "/edit/:id_absen",
        templateUrl: "views/master/tabsen/edit.html",
        data: { pageTitle: 'edit tabsen' },
        controller:"master.tabsen.edit"
    })

    /*-----------------------------------------
      Jurusan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.jurusan', {
        url: "/jurusan",
        templateUrl: "views/master/jurusan/data.html",
        data: { pageTitle: 'jurusan' },
        controller:"master.jurusan"
    })
    .state('master.jurusan.add', {
        url: "/create",
        templateUrl: "views/master/jurusan/add.html",
        data: { pageTitle: 'add jurusan' },
        controller:"master.jurusan.add"
    })

    .state('master.jurusan.edit', {
        url: "/edit/:id_jurusan",
        templateUrl: "views/master/jurusan/edit.html",
        data: { pageTitle: 'edit jurusan' },
        controller:"master.jurusan.edit"
    })

    /*-----------------------------------------
      Kelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.kelas', {
        url: "/kelas",
        templateUrl: "views/master/kelas/data.html",
        data: { pageTitle: 'kelas' },
        controller:"master.kelas"
    })
    .state('master.kelas.add', {
        url: "/create",
        templateUrl: "views/master/kelas/add.html",
        data: { pageTitle: 'add kelas' },
        controller:"master.kelas.add"
    })

    .state('master.kelas.edit', {
        url: "/edit/:id_kelas",
        templateUrl: "views/master/kelas/edit.html",
        data: { pageTitle: 'edit kelas' },
        controller:"master.kelas.edit"
    })


}

angular
    .module('inspinia')
    .config(configMaster)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

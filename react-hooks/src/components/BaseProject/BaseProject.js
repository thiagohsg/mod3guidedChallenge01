import React, { Component } from 'react';

export default class BaseProject extends Component {
  render() {
    return (
      <div className="padding default-flex-row">
        <span className="small material-icons">check</span>
        <span>
          Projeto que serve de base para todos os demais projetos feitos com React desta disciplina.
        </span>
      </div>
    );
  }
}

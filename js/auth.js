/**
 * AtacadoPro | auth.js
 * Gerencia o modo funcionário (toggle simples com senha).
 */

const Auth = (() => {
    const SENHA = '1234'; // Trocar conforme necessário
    let _funcionario = false;

    function isFuncionario() {
        return _funcionario;
    }

    function ativarModo() {
        const senha = prompt('Digite a senha do funcionário:');
        if (senha === null) return false; // cancelou
        if (senha === SENHA) {
            _funcionario = true;
            _atualizarUI();
            return true;
        } else {
            alert('Senha incorreta.');
            return false;
        }
    }

    function desativarModo() {
        _funcionario = false;
        _atualizarUI();
    }

    function toggle() {
        if (_funcionario) {
            desativarModo();
        } else {
            ativarModo();
        }
    }

    function _atualizarUI() {
        const btn = document.getElementById('btn-modo-funcionario');
        const badges = document.querySelectorAll('.badge-funcionario');
        const elsFuncionario = document.querySelectorAll('.so-funcionario');
        const elsCliente = document.querySelectorAll('.so-cliente');

        if (!btn) return;

        if (_funcionario) {
            btn.textContent = '🔓 Modo Funcionário';
            btn.classList.add('ativo');
            badges.forEach(b => b.style.display = 'inline-flex');
            elsFuncionario.forEach(e => e.style.display = '');
            elsCliente.forEach(e => e.style.display = 'none');
        } else {
            btn.textContent = '🔑 Modo Funcionário';
            btn.classList.remove('ativo');
            badges.forEach(b => b.style.display = 'none');
            elsFuncionario.forEach(e => e.style.display = 'none');
            elsCliente.forEach(e => e.style.display = '');
        }

        // Dispara evento para outros módulos atualizarem
        document.dispatchEvent(new CustomEvent('modoAlterado', { detail: { funcionario: _funcionario } }));
    }

    return { isFuncionario, toggle, ativarModo, desativarModo };
})();

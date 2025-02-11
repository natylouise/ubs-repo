package br.sp.gov.fatec.ubs.backend;
public class mensagemresponde {
    private String mensagem;
 
    public void mensagemResponse(String mensagem) {
        this.mensagem = mensagem;
    }
 
    public String getMensagem() {
        return mensagem;
    }
 
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
    
}

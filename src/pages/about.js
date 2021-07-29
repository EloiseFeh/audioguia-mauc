import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

function Sobre() {
    return (
        <div>
            <div className="container" style={{marginTop: '15vh'}}>
        <h2>Sobre o MAUC</h2>
        <p>
        O Museu de Arte da Universidade Federal do Ceará (Mauc), é um museu universitário vinculado à Secretaria de Cultura Artística da UFC, órgão do Ministério da Educação (MEC). O Museu iniciou suas atividades em 18 de julho de 1961, inaugurado pelo reitor Antônio Martins Filho.
        </p>

        <h2>Horário</h2>
        <p>
        O Mauc funciona de segunda a sexta-feira, das 8h às 12h e das 13h às 17h. Em sábados agendados, o museu abre para visitação com programação especial. 
Atenção: em razão da pandemia de Covid-19, o funcionamento pode ser alterado. É recomendado, antes de realizar a visita, buscar informações atualizadas sobre o funcionamento do Museu em www.mauc.ufc.br ou nas redes sociais (Instagram e Facebook - @museudeartedaufc)
        </p>

        <p>Avenida da Universidade, 2854 – Benfica – CEP 60020-181 – Fortaleza – CE – Brasil</p>
      <p><b>Fone:</b> +55 85 3366-7481</p>
      <p>Estacionamento gratuito (havendo vagas disponíveis)</p>

      <br/>
      <h3>Ponto de Referência</h3>
      <p>O Mauc fica localizado no cruzamento da Avenida da Universidade com a Avenida Treze de Maio, em frente à Reitoria da UFC e próximo ao Shopping Benfica.</p>
      
      <br/>

      <h3>Como chegar</h3>
      <div className="chegarItem" style={{marginBottom: '5px', padding: '1rem'}}>
        <FaIcons.FaCarAlt style={{ fontSize: '32px'}} /> <span style={{fontSize: '30px', fontWeight: 'bold', marginLeft: '5px'}}>Carro</span>
        <p>
        Para quem vem de carro ou moto, havendo vagas, poderá estacionar no estacionamento que atende ao Mauc e a outros setores da UFC circunvizinhos como a Faculdade de Arquitetura e Urbanismo & Design, a Rádio Universitária, a Pró-Reitoria de Extensão, as Edições da UFC, a Imprensa Universitária e o CETRED.
        </p>
      </div>
      
      <div className="chegarItem" style={{marginBottom: '5px', padding: '1rem'}}>
        <FaIcons.FaBus style={{ fontSize: '32px'}} /> <span style={{fontSize: '30px', fontWeight: 'bold', marginLeft: '5px'}}>Ônibus</span>
        <p>
        Para quem vem de ônibus, as paradas mais próximas estão localizadas nas paradas das Casas de Cultura da UFC,
        da Reitoria ou do Shopping Benfica (consulte as linhas de ônibus que passam próximo no site da <a style={{ color: 'white', fontWeight: 'bold'}} href="http://www.etufor.ce.gov.br/GIST/itiLinha.htm">Etufor</a>)
        </p>
      </div>

      <div className="chegarItem" style={{marginBottom: '5px', padding: '1rem'}}>
        <FaIcons.FaTrain style={{ fontSize: '32px'}} /> <span style={{fontSize: '30px', fontWeight: 'bold', marginLeft: '5px'}}>Ônibus</span>
        <p>
        Para quem vem de metrô, descer na estação do Shopping Benfica.</p>
      </div>

      <div className="chegarItem" style={{marginBottom: '5px', padding: '1rem'}}>
        <FaIcons.FaTrain style={{ fontSize: '32px'}} /> <span style={{fontSize: '30px', fontWeight: 'bold', marginLeft: '5px'}}>Metrô</span>
        <p>
        Para quem vem de metrô, descer na estação do Shopping Benfica.</p>
      </div>

      <div className="chegarItem" style={{marginBottom: '5px', padding: '1rem'}}>
        <IoIcons.IoMdBicycle style={{ fontSize: '32px'}} /> <span style={{fontSize: '30px', fontWeight: 'bold', marginLeft: '5px'}}>Bicicleta</span>
        <p>
        Para quem vem de bicicleta compartilhada, em frente à Reitoria da UFC, Praça da Gentilândia ou Shopping Benfica existem estações (consulte as estações mais próximas no <a style={{ color: 'white', fontWeight: 'bold'}} href="http://www.bicicletar.com.br/mapaestacao.aspx">Bicicletar Fortaleza</a>).
Para quem vem de bicicleta própria, na entrada da Faculdade de Arquitetura e Urbanismo e Design existe um estacionamento para bicicletas.

        </p>
      </div>

        </div>
      </div>
    );
  }
  
  export default Sobre;
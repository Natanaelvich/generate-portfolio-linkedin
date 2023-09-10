import About from '@/components/About'
import Expirence from '@/components/Expirence'
import SideBar from '@/components/SideBar'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid grid-cols-aside gap-4 p-4 h-full">
        <SideBar />

        <div>
          <section>
            <About />

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              Expirences
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Expirence
                  title="Coamo Agroindustrial Cooperativa"
                  description="Senior Software Engineer ReactJS | React-native | NodeJS"
                  date="julho de 2022 - Present (1 ano 3 meses)"
                  image="/coamo.jpeg"
                  resume="Na Coamo, uma grande cooperativa agroindustrial, atuo como líder técnico, focando em soluções de software para sistemas de frete com React.js, React Native e Node.js. Além de implementar soluções eficientes, desempenho um papel importante na criação de testes unitários, de integração e end-to- end, e no treinamento e mentoria de juniores e estagiários. Estou diretamente envolvido com o negócio e os clientes, compreendendo suas necessidades e adaptando as soluções técnicas para melhor atendê-los, garantindo assim o crescimento e sucesso da Coamo."
                />
              </li>
              <li>
                <Expirence
                  title="Control Tracker"
                  description="FreeLancer Frontend Developer React Native at CTracker"
                  date="novembro de 2020 - julho de 2023 (2 anos 9 meses)"
                  image="/controltracker.jpeg"
                  resume="Na CTracker, trabalhei no desenvolvimento de aplicações voltadas para o gerenciamento e rastreamento de veículos. Essas soluções eram destinadas a uma variedade de usuários, desde motoristas comuns até frotistas. Utilizando o React Native, participei ativamente da criação de aplicativos que proporcionaram aos usuários uma ferramenta eficiente e intuitiva para gerenciar e rastrear seus veículos. Este projeto demonstrou minha habilidade para desenvolver soluções personalizadas que atendem às necessidades específicas de diferentes públicos."
                />
              </li>
              <li>
                <Expirence
                  title="BNE - Banco Nacional de Empregos"
                  description="Frontend developer ReactJS | React Native at BNE - Banco Nacional de Empregos"
                  date="abril de 2021 - março de 2023 (2 anos)"
                  image="/bne.jpeg"
                  resume="No BNE, atuei de maneira substancial no desenvolvimento e otimização de soluções para coleta de documentos, exercendo um papel crucial como líder técnico e desenvolvedor React e React Native. Trabalhei em estreita colaboração com a equipe para projetar e implementar soluções eficientes para a coleta e gestão de documentos, também assumindo a responsabilidade de elaborar testes unitários, de integração e end-to-end para assegurar a qualidade do software. Meu envolvimento direto com o negócio e os clientes permitiu-me compreender profundamente suas necessidades e adaptar as soluções técnicas de acordo. Adicionalmente, contribuí para o crescimento profissional de juniores e estagiários através de treinamento e mentoria, o que reforçou ainda mais a capacidade de entrega e qualidade da nossa equipe no BNE."
                />
              </li>
              <li>
                <Expirence
                  title="Ideia Soluções em Sistemas"
                  description="Full Stack developer | React, React Native and PHP at empresa Ideia Tecnologia."
                  date="junho de 2020 - fevereiro de 2022 (1 ano 9 meses)"
                  image="/ideia.jpeg"
                  resume="Na Ideia Soluções em Sistemas, uma empresa imobiliária, atuei como desenvolvedor Full Stack utilizando React, React Native e PHP. Meu trabalho envolveu o desenvolvimento e a implementação de soluções de software complexas, centradas no setor imobiliário, que facilitaram a eficiência operacional e aprimoraram a experiência do usuário."
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

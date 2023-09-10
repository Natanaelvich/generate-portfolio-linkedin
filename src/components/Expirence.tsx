import Image from 'next/image'

export default function Expirence() {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/coamo.jpeg"
        alt="Coamo"
        width={200}
        height={200}
        className="rounded-md"
      />

      <div className="flex flex-col gap-2">
        <h4>COAMO AGROINDUSTRIAL COOPERATIVA</h4>
        <h5>Senior Software Engineer ReactJS | React-native | NodeJS</h5>
        <h6>julho de 2022 - Present (1 ano 3 meses)</h6>
        <p>
          Na Coamo, uma grande cooperativa agroindustrial, atuo como líder
          técnico, focando em soluções de software para sistemas de frete com
          React.js, React Native e Node.js. Além de implementar soluções
          eficientes, desempenho um papel importante na criação de testes
          unitários, de integração e end-to- end, e no treinamento e mentoria de
          juniores e estagiários. Estou diretamente envolvido com o negócio e os
          clientes, compreendendo suas necessidades e adaptando as soluções
          técnicas para melhor atendê-los, garantindo assim o crescimento e
          sucesso da Coamo.
        </p>
      </div>
    </div>
  )
}

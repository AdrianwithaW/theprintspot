const Dymo = require('dymojs'),
	   dymo = new Dymo(),
     fs = require('fs'),
     Pusher = require('pusher-js'),
     socket = new Pusher('7a30ef955c314c06444d', {
       cluster: 'ap1',
       authEndpoint: 'http://example.com/pusher/auth',
       forceTLS: true
     });

const channel = socket.subscribe('thebeerspot-northcote');

var moment = require('moment');

channel.bind('print.label', function (data) {
    console.log('Printing label...', data)
    var label = `<?xml version="1.0" encoding="utf-8"?>
        <DieCutLabel Version="8.0" Units="twips">
          <PaperOrientation>Landscape</PaperOrientation>
          <Id>LargeAddress</Id>
          <PaperName>30321 Large Address</PaperName>
          <DrawCommands>
            <RoundRectangle X="0" Y="0" Width="2025" Height="5020" Rx="270" Ry="270"/>
          </DrawCommands>
          <ObjectInfo>
            <TextObject>
              <Name>BEER</Name>
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
              <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
              <LinkedObjectName></LinkedObjectName>
              <Rotation>Rotation0</Rotation>
              <IsMirrored>False</IsMirrored>
              <IsVariable>True</IsVariable>
              <HorizontalAlignment>Center</HorizontalAlignment>
              <VerticalAlignment>Middle</VerticalAlignment>
              <TextFitMode>ShrinkToFit</TextFitMode>
              <UseFullFontHeight>True</UseFullFontHeight>
              <Verticalized>False</Verticalized>
              <StyledText>
                <Element>
                  <String>NEW ` + data.beer.name + ` by ` + data.beer.brewery.name + `</String>
                  <Attributes>
                    <Font Family="Cardenio Modern" Size="13" Bold="True" Italic="False" Underline="False" Strikeout="False"/>
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
                  </Attributes>
                </Element>
              </StyledText>
            </TextObject>
            <Bounds X="321.5997" Y="134.0055" Width="4434.617" Height="511.4101"/>
          </ObjectInfo>
          <ObjectInfo>
            <TextObject>
              <Name>DATE</Name>
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
              <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
              <LinkedObjectName></LinkedObjectName>
              <Rotation>Rotation0</Rotation>
              <IsMirrored>False</IsMirrored>
              <IsVariable>True</IsVariable>
              <HorizontalAlignment>Center</HorizontalAlignment>
              <VerticalAlignment>Middle</VerticalAlignment>
              <TextFitMode>ShrinkToFit</TextFitMode>
              <UseFullFontHeight>True</UseFullFontHeight>
              <Verticalized>False</Verticalized>
              <StyledText>
                <Element>
                  <String>Purged &amp; pressured filled on ` + moment().format( 'DD-MM-YYYY' ) + `. Good for 3 months.</String>
                  <Attributes>
                    <Font Family="Gotham" Size="10" Bold="True" Italic="False" Underline="False" Strikeout="False"/>
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
                  </Attributes>
                </Element>
              </StyledText>
            </TextObject>
            <Bounds X="321.5997" Y="1218.003" Width="4400.467" Height="283.4857"/>
          </ObjectInfo>
          <ObjectInfo>
            <TextObject>
              <Name>DOMAIN</Name>
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
              <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
              <LinkedObjectName></LinkedObjectName>
              <Rotation>Rotation0</Rotation>
              <IsMirrored>False</IsMirrored>
              <IsVariable>True</IsVariable>
              <HorizontalAlignment>Center</HorizontalAlignment>
              <VerticalAlignment>Middle</VerticalAlignment>
              <TextFitMode>AlwaysFit</TextFitMode>
              <UseFullFontHeight>True</UseFullFontHeight>
              <Verticalized>False</Verticalized>
              <StyledText>
                <Element>
                  <String>WE DELIVER - spotmebeer.nz</String>
                  <Attributes>
                    <Font Family="Gotham" Size="9" Bold="True" Italic="False" Underline="False" Strikeout="False"/>
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
                  </Attributes>
                </Element>
              </StyledText>
            </TextObject>
            <Bounds X="321.5997" Y="1466.101" Width="4365.9" Height="473.0991"/>
          </ObjectInfo>
          <ObjectInfo>
            <TextObject>
              <Name>ABV</Name>
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
              <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
              <LinkedObjectName></LinkedObjectName>
              <Rotation>Rotation0</Rotation>
              <IsMirrored>False</IsMirrored>
              <IsVariable>True</IsVariable>
              <HorizontalAlignment>Center</HorizontalAlignment>
              <VerticalAlignment>Middle</VerticalAlignment>
              <TextFitMode>ShrinkToFit</TextFitMode>
              <UseFullFontHeight>True</UseFullFontHeight>
              <Verticalized>False</Verticalized>
              <StyledText>
                <Element>
                  <String>` + data.beer.abv + `% ABV 750ml (` + ( Math.round( ( ( data.beer.abv / 100 ) * 0.75 * 0.789 * 1000 ) ) / 10 ) + ` Std. Drinks)</String>
                  <Attributes>
                    <Font Family="Gotham" Size="8" Bold="True" Italic="False" Underline="False" Strikeout="False"/>
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
                  </Attributes>
                </Element>
              </StyledText>
            </TextObject>
            <Bounds X="410.5733" Y="880.1069" Width="4179.229" Height="349.9962"/>
          </ObjectInfo>
          <ObjectInfo>
            <TextObject>
              <Name>STYLE</Name>
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
              <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
              <LinkedObjectName></LinkedObjectName>
              <Rotation>Rotation0</Rotation>
              <IsMirrored>False</IsMirrored>
              <IsVariable>True</IsVariable>
              <HorizontalAlignment>Center</HorizontalAlignment>
              <VerticalAlignment>Middle</VerticalAlignment>
              <TextFitMode>ShrinkToFit</TextFitMode>
              <UseFullFontHeight>True</UseFullFontHeight>
              <Verticalized>False</Verticalized>
              <StyledText>
                <Element>
                  <String>` + data.beer.style + `</String>
                  <Attributes>
                    <Font Family="Gotham" Size="9" Bold="True" Italic="False" Underline="False" Strikeout="False"/>
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
                  </Attributes>
                </Element>
              </StyledText>
            </TextObject>
            <Bounds X="415.6404" Y="581.826" Width="4179.229" Height="349.9962"/>
          </ObjectInfo>
        </DieCutLabel>`

    dymo.print('DYMO LabelWriter 450 @ The Beer Spot Mac Mini', label);
});

console.log( 'Print run' );
